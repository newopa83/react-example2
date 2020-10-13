import React from 'react';
import Table from "react-bootstrap/Table";

const MemberDetailInfo = (props) => {

    return (
        <Table className="tbl-xs">
            <tbody>
            <tr>
                <th width="30%">구분</th>
                <td>{props.member.memberType}</td>
            </tr>
            <tr>
                <th width="30%">사업자명</th>
                <td>{props.member.companyName}</td>
            </tr>
            <tr>
                <th width="30%">대표자명</th>
                <td>{props.member.ceoName}</td>
            </tr>
            <tr>
                <th width="30%">사업자번호</th>
                <td>{props.member.companyNo}</td>
            </tr>
            </tbody>
        </Table>
    );

};

export default MemberDetailInfo;
