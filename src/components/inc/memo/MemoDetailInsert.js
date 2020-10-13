import React, {useRef, useState} from 'react';
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import { useAlert } from "react-alert";

const MemoDetailInsert = (props) => {

    const alert = useAlert();
    const memoRef = useRef();
    const [memo, setMemo] = useState('');
    const _memo = (e) => {
        setMemo(e.currentTarget.value);
    };
    const _insert = () => {
        if (!memo) {
            alert.error("메모를 입력해주세요.");
        }
        else
        {
            props._memoAct(memo,0,'INSERT');
            setMemo('');
            memoRef.current.value = '';
        }
    };

    return (
        <Table className="tbl-ss">
            <colgroup>
                <col width='*'/>
            </colgroup>
            <tbody>
            <tr>
                <td>
                    <textarea ref={memoRef} rows='5' style={{width: "100%"}} onChange={_memo}>{memo}</textarea>
                </td>
            </tr>
            <tr>
                <td className='ta-center'><Button variant="outline-success" size='sm' onClick={_insert}>메모 등록</Button></td>
            </tr>
            </tbody>
        </Table>
    );

};

export default MemoDetailInsert;
