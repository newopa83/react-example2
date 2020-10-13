import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import dateLib from "../../../core/lib/dateLib";
import {Button} from "react-bootstrap";
import strLib from "../../../core/lib/strLib";
import renderHTML from 'react-render-html';

const MemoDetailList = (props) => {

    const [listUse,setListUse] = useState([]);
    const [thisMemo,setThisMemo] = useState('');

    const _memoSync = (e) => {
        setThisMemo(e.currentTarget.value);
    };
    const _deleteMemo = async (i) => {
        const result = window.confirm("삭제 하시겠습니까?");
        if(result){
            props._deleteMember(i);
        }else{
        }
    };
    const _updateMemo =  async (i) => {
        const newArr = [...listUse];
        newArr[i] = !newArr[i];
        setListUse(newArr);

        if(!newArr[i])
        {
            props._memoAct(thisMemo,i,'UPDATE');
            setThisMemo('');
        }
        else
            setThisMemo(newArr[i].memo);
    };

    const _listItem = () => {

        if(props.member.memoInfoList.length > 0)
        {
            return props.member.memoInfoList.map((d, i) => {
                return (
                    <tr key={i} className='border-bottom'>
                    <td className="ta-center" style={{verticalAlign:'middle'}}>{dateLib.format(d.regModDate.regDate,'yyyy-MM-dd HH:mm:ss')}</td>
                <td className="ta-center" style={{verticalAlign:'middle'}}>
                {
                    listUse[i] &&
                    <textarea cols='50' rows='3' onChange={(e)=>{
                    _memoSync(e);
                }}>{d.memo}</textarea>
                }
                {
                    !listUse[i] &&
                    <span>{renderHTML("<span>" + strLib.splitFilter(d.memo,'\n') + "</span>")}</span>
                }
            </td>
                <td className="ta-center va-center">
                    <Button size="sm" variant="outline-primary" className='m-1' onClick={()=> _updateMemo(i)}>수정</Button>
                <Button size="sm" variant="outline-danger" className='m-1' onClick={()=>_deleteMemo(i)}>삭제</Button>
                </td>
                </tr>
            );
            });
        }
        else
        {
            return (
                <tr className='border-bottom'>
            <td className='ta-center va-center' colSpan='3'>내용이 없습니다.</td>
        </tr>
        );
        }

    };

    useEffect(() => {
        const listCopy = Object.assign([], props.member.memoInfoList);
        setListUse(listCopy.fill(false));
    },[props.member.memoInfoList]);

    return (
        <Table className="tbl-ss">
        <colgroup>
        <col width='20%' />
        <col width='*' />
        <col width='20%' />
        </colgroup>
        <th className="ta-center bg-light">작성 일시</th>
        <th className="ta-center bg-light">내용</th>
        <th className="ta-center bg-light">관리</th>
        <tbody>
        {
            _listItem()
        }
        </tbody>
        </Table>
);

};

export default MemoDetailList;
