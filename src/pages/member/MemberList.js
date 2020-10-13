import React, {useEffect, useState} from 'react';
import Layout from "../../components/inc/Layout";
import MemberSubHeader from "../../components/inc/member/MemberSubHeader";
import memberSv from '../../core/sv/rest/memberSv';
import Table from "react-bootstrap/Table";
import {Button, Form} from "react-bootstrap";
import Pagination from 'react-responsive-pagination';
import MemberInfo from "../../components/inc/member/MemberInfo";
import amCommonSv from "../../core/sv/amCommonSv";
import MemberDetailInfo from "../../components/inc/member/MemberDetailInfo";
import dateLib from "../../core/lib/dateLib";
import MemoDetailModal from "../../components/modal/MemoDetailModal";
import MemberDetailModal from "../../components/modal/MemberDetailModal";
import SmsSendModal from '../../components/modal/SmsSendModal';

const MemberList = (props) => {

    //const store = useSelector(state => state);

    const [page, setPage] = useState(1);
    const [memoShow, setMemoShow] = useState(false);
    const [smsShow, setSmsShow] = useState(false);
    const [memberShow, setMemberShow] = useState(false);
    const [thisMember, setThisMember] = useState({});
    const [searchData, setSearchData] = useState({page: 1, size: 20, orderVal: 'regModDate.regDate_DESC'});
    const [listData, setListData] = useState({content: []});
    const [sumCountData, setSumCountData] = useState({TOTAL: 0, ANDROID: 0, IOS: 0});
    const [memberInfo, setMemberInfo] = useState({listData: {totalPages: 0}});
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const getList = async (page) => {

        const data = await memberSv.memberList({memberInfo, searchData, page});

        setListData(data.data.page);
        data.data.sumCountData.forEach((d) => {
            if (d.id !== null) {
                setSumCountData({
                    ...sumCountData,
                    [d.id]: d.cnt
                })
            }
        });
        setSumCountData({
            ...sumCountData,
            'TOTAL': data.data.page.totalElements
        });

    };

    const _move = (url,data) => {
        amCommonSv.move(url,data);
    };

    const _refresh = async (member) => {
        await getList(page);
        setThisMember(member);
    };

    const _useYn = async (d, e) => {
        d.useYn = e.currentTarget.value;
        await memberSv.updateMember(d);
        await getList(page);
    };

    const _memoPop = async (member) => {
        setThisMember(member);
        setMemoShow(true);
    };

    const _memberPop = async (member) => {
        setThisMember(member);
        setMemberShow(true);
    };

    const _delMember = async (id) => {
        const result = window.confirm("삭제 하시겠습니까?\n복구가 불가능 합니다.");
        if(result){
            await memberSv.deleteMember(id);
            await _refresh();
        }else{
        }
    };

    const _smsPop = async (member) =>{
        setThisMember(member);
        setSmsShow(true);
    }

    const _deleteMember = async (i) => {
        let member = Object.assign({},thisMember);
        member.memoInfoList.splice(i,1);
        await memberSv.updateMember(member);
        await getList(page);
    };

    const _listItem = () => {
        return listData.content.map((d, i) => {
            return (
                <tr key={i}>
                    <td className='ta-center' valign='middle'>{amCommonSv.pageInfo(listData, i)}</td>
                    <td className='ta-center'><MemberInfo member={d}/></td>
                    <td className='ta-center'><MemberDetailInfo member={d}/></td>
                    <td className='ta-center'>{dateLib.format(d.regModDate.regDate, 'yyyy-MM-dd HH:mm:ss')}</td>
                    <td width='40'>
                        <span className='ta-center'
                              style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                             <Form.Check
                                 type='radio'
                                 label='사용'
                                 checked={d.useYn}
                                 onChange={(e) => _useYn(d, e)}
                                 value={true}
                                 name={`radio_${i}`}
                                 id='id1'
                             />
                             <Form.Check
                                 className='pl-5'
                                 name={`radio_${i}`}
                                 checked={!d.useYn}
                                 onChange={(e) => _useYn(d, e)}
                                 type='radio'
                                 value={false}
                                 label='사용않음'
                                 id='id2'
                             />
                        </span>
                    </td>
                    <td>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Button variant="outline-success" size="sm" className='m-1' onClick={()=>_memberPop(d)}>정보수정</Button>
                            <Button variant="outline-primary" size="sm" className='m-1' onClick={()=>_memoPop(d)}>메모</Button>
                            <Button variant="outline-warning" size="sm" className='m-1' onClick={()=>_smsPop(d)}>문자</Button>
                            <Button variant="outline-danger" size="sm" className='m-1' onClick={()=>_move('/approval/list',{memberID:d.id})}>결제 현황</Button>
                            <Button variant="outline-danger" size="sm" className='m-1' onClick={()=>_delMember(d.id)}>회원삭제</Button>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    useEffect(() => {

        getList(page).then(d=>{
        }).catch(e=>console.log("e==",e));

        /*const resizeHandler = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };*/
    },[page]);

    return (
        <Layout>
            <MemberSubHeader/>
            <div className="contents">
                <h3 className="mt-3 ml-4 mb-2 text-muted">회원 리스트</h3>
                <Table bordered hover className='board-list' size="sm">
                    <thead>
                    <tr className="bg-light">
                        <th>번호</th>
                        <th>회원 정보</th>
                        <th>회원 상세 정보</th>
                        <th>등록일</th>
                        <th>계정 사용 여부</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        _listItem()
                    }
                    </tbody>
                </Table>
            </div>
            <div className="m-3">
                {
                    listData.totalPages &&
                    <Pagination
                        current={page}
                        total={listData.totalPages}
                        onPageChange={async (p) => {
                            setPage(p);
                            await getList(p);
                        }}
                        maxWidth={400}
                    />
                }

            </div>
            {
                memoShow &&
                <MemoDetailModal _refresh={_refresh} member={thisMember} _deleteMember={_deleteMember} show={memoShow} _memoShow={setMemoShow} />
            }
            {
                smsShow &&
                <SmsSendModal member={thisMember} show={smsShow} _smsShow={setSmsShow} />
            }
            {
                memberShow &&
                <MemberDetailModal _refresh={_refresh} member={thisMember} show={memberShow} _memberShow={setMemberShow} />
            }
        </Layout>
    );
};

export default MemberList;
