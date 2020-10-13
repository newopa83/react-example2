import React from 'react';
import Table from "react-bootstrap/Table";

const MemberSimpleInfo = (props) => {
    return (
        <Table className="tbl-ss border-bottom">
            <tbody>
            <tr>
                <th className='bg-light'>아이디</th>
                <td>{props.member.id}</td>
            </tr>
            <tr>
                <th className='bg-light'>이름</th>
                <td>{props.member.name}</td>
            </tr>
            <tr>
                <th className='bg-light'>휴대폰</th>
                <td>{props.member.phone}</td>
            </tr>
            </tbody>
        </Table>
    );

};

export default MemberSimpleInfo;
