import React,{useState,useEffect} from 'react';
import Layout from "../../components/inc/Layout";
import MemoSubHeader from "../../components/inc/memo/MemoSubHeader";
import memberSv from "../../core/sv/rest/memberSv";
import {Button, Form, Table} from "react-bootstrap";
import Pagination from 'react-responsive-pagination';
import MemberInfo from "../../components/inc/member/MemberInfo";
import MemberDetailInfo from "../../components/inc/member/MemberDetailInfo";
import amCommonSv from "../../core/sv/amCommonSv";
import dateLib from "../../core/lib/dateLib";
import strLib from "../../core/lib/strLib";
import renderHTML from 'react-render-html';
import MemoDetailModal from "../../components/modal/MemoDetailModal";
import MemberDetailModal from "../../components/modal/MemberDetailModal";
import SmsSendModal from '../../components/modal/SmsSendModal';

const MemberList = () => {

    const [page, setPage] = useState(1);
    const [listData,setListData] = useState({content:[]});
    const [thisMember,setThisMember] = useState({});
    const [memberShow,setMemberShow] = useState(false);
    const [memoShow,setMemoShow] = useState(false);
    const [smsShow,setSmsShow] = useState(false);
    const [searchData, setSearchData] = useState({page: 1, size: 20, orderVal: 'regModDate.regDate_DESC'});
    const [memberInfo, setMemberInfo] = useState({listData: {totalPages: 0}});

    
    const _refresh = async (member) => {
        await getList(page);
        setThisMember(member);
    };

    const _deleteMember = async (i) => {
        let member = Object.assign({},thisMember);
        member.memoInfoList.splice(i,1);
        await memberSv.updateMember(member);
        await getList(page);
    };

    const _memberPop = async (member) => {
        setThisMember(member);
        setMemberShow(true);
    };

    const _smsPop = async (member) =>{
        setThisMember(member);
        setSmsShow(true);
    }

    const _move = (url,data) => {
        amCommonSv.move(url,data);
    };

    const _memoShow = (data) => {
        setMemoShow(true);
        setThisMember(data);
    };

    const getList = async (page) => {
        const data = await memberSv.memberList({memberInfo, searchData, page});
        setListData(data.data.page);
    };

    const _listItem = () => {
        return listData.content.map((d, i) => {
            return (
                <tr key={i}>
                    <td className='ta-center' valign='middle'>{amCommonSv.pageInfo(listData, i)}</td>
                    <td className='ta-center'><MemberInfo member={d}/></td>
                    <td className='ta-center'><MemberDetailInfo member={d}/></td>
                    <td className='ta-center' onClick={()=> _memoShow(d)}>
                        {
                            d.memoInfoList.length > 0 &&
                            renderHTML("" + strLib.splitFilter(d.memoInfoList[0].memo,'\n') + "")
                        }
                        {
                            d.memoInfoList.length === 0 &&
                            '내용없음'
                        }
                    </td>
                    <td className='ta-center'>{dateLib.format(d.regModDate.regDate, 'yyyy-MM-dd HH:mm:ss')}</td>
                    <td>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Button variant="outline-success" size="sm" className='m-1' onClick={()=>_memberPop(d)}>정보수정</Button>
                            <Button variant="outline-warning" size="sm" className='m-1' onClick={()=>_smsPop(d)}>문자</Button>
                            <Button variant="outline-danger" size="sm" className='m-1' onClick={()=>_move('/approval/list',{memberID:d.id})}>결제 현황</Button>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    useEffect (() => {
        getList(1).then();
    },[page]);

    return (
        <Layout>
            <MemoSubHeader/>
            <div className="contents">
                <h3 className="mt-3 ml-4 mb-2 text-muted">메모 리스트</h3>
                <Table bordered hover className='board-list' size="sm">
                    <thead>
                    <tr className="bg-light">
                        <th>번호</th>
                        <th>회원 정보</th>
                        <th>회원 상세 정보</th>
                        <th>메모</th>
                        <th>등록일</th>
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
    )
};

export default MemberList;
