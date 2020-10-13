import React,{useRef,useEffect,useState} from 'react';
import Table from "react-bootstrap/Table";
import { Form ,Button, ButtonGroup} from "react-bootstrap";
import typeLib from '../../../core/lib/typeLib';
import memberSv from '../../../core/sv/rest/memberSv';

export default function MemberUpdateInfo (props) {

    const pwdRef = useRef();

    const _passwordUpdate = async () => {

        const password = pwdRef.current.value;

        if(!password)
        {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        await memberSv.passwordUpdate({memberID : props.member.id,password});
        pwdRef.current.value = "";
    };

    return (
        <Table className="tbl-xs">
            <tbody>
            <tr>
                <th width="20%" className='bg-light'>아이디</th>
                <td>{props.member.id}</td>
            </tr>
            <tr>
                <th width="20%" className='bg-light'>이름</th>
                <td>{props.member.name}</td>
            </tr>
            <tr> 
                <th width="20%" className='bg-light'>성별</th>
                <td>
                    {typeLib.sexType(props.member.sex)}
                </td>
            </tr>
            <tr>
                <th width="20%" className='bg-light'>비밀번호</th>
                <td style={{display:'flex',flexDirection:'row'}}>
                    <Form.Control style={{width:'80%'}} type="password" ref={pwdRef} placeholder="비밀번호" />
                    <Button variant="outline-success" size="sm" className='m-1' onClick={()=>_passwordUpdate()}>수정</Button>
                </td>
            </tr>
            <tr>
                <th width="20%" className='bg-light'>사업자 구분</th>
                <td>
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={()=>props._setMember('PERSON','memberType')} 
                        variant={"outline-danger " + (props.member.memberType==='PERSON' ? 'active' : '')}>개인</Button>

                        <Button onClick={()=>props._setMember('COMPANY','memberType')} 
                        variant={"outline-primary " + (props.member.memberType==='COMPANY' ? 'active' : '')}>사업자</Button>
                    </ButtonGroup>
                </td>
            </tr>
            {
                props.member.memberType==='PERSON' &&
                <>
                    <tr>
                        <th width="20%" className='bg-light'>휴대폰</th>
                        <td>
                            <Form.Control style={{width:'80%'}} type="text" onChange={(e)=> props._setMember(e.currentTarget.value,'phone')} 
                            placeholder="휴대폰" value={props.member.phone} />
                        </td>
                    </tr>
                    <tr>
                        <th width="20%" className='bg-light'>생년월일</th>
                        <td>
                            <Form.Control style={{width:'80%'}} type="text" onChange={(e)=> props._setMember(e.currentTarget.value,'birthDate')} 
                            placeholder="생년월일" value={props.member.birthDate} />
                        </td>
                    </tr>
                </>
            }
            {
                props.member.memberType==='COMPANY' &&
                <>
                    <tr>
                        <th width="20%" className='bg-light'>사업자 번호</th>
                        <td>
                            <Form.Control style={{width:'80%'}} type="text" onChange={(e)=> props._setMember(e.currentTarget.value,'companyNo')} 
                            placeholder="사업자 번호" value={props.member.companyNo} />
                        </td>
                    </tr>
                    <tr>
                        <th width="20%" className='bg-light'>회사명</th>
                        <td>
                            <Form.Control style={{width:'80%'}} type="text" onChange={(e)=> props._setMember(e.currentTarget.value,'companyName')} 
                            placeholder="회사명" value={props.member.companyName} />
                        </td>
                    </tr>
                    <tr>
                        <th width="20%" className='bg-light'>대표자명</th>
                        <td>
                            <Form.Control style={{width:'80%'}} type="text" onChange={(e)=> props._setMember(e.currentTarget.value,'ceoName')} 
                            placeholder="회사명" value={props.member.ceoName} />
                        </td>
                    </tr>
                </>
            }
            
            </tbody>
        </Table>
    );

};
