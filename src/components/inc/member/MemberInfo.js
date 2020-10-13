import React from 'react';
import Table from "react-bootstrap/Table";
import dateLib from "../../../core/lib/dateLib";

const MemberInfo = (props) => {
    return (
        <Table className="tbl-xs">
            <tbody>
            <tr>
                <th>아이디</th>
                <td>{props.member.id}</td>
            </tr>
            <tr>
                <th>이름</th>
                <td>{props.member.name}</td>
            </tr>
            <tr>
                <th>휴대폰</th>
                <td>{props.member.phone}</td>
            </tr>
            <tr>
                <th>등록일</th>
                <td>{dateLib.format(props.member.regModDate.regDate,'yyyy-MM-dd HH:mm:ss')}</td>
            </tr>
            <tr>
                <th>가입경로</th>
                <td>{props.member.deviceType}</td>
            </tr>
            <tr>
                <th>탈퇴여부</th>
                <td>{props.member.withdrawalYn ? 'YES' : 'NO'}</td>
            </tr>
            </tbody>
        </Table>
    );

};

export default MemberInfo;
