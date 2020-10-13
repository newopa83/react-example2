import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Card, Button, Row,Container} from "react-bootstrap";
import MemberSimpleInfo from "../inc/member/MemberSimpleInfo";
import MemoDetailList from "../inc/memo/MemoDetailList";
import MemoDetailInsert from "../inc/memo/MemoDetailInsert";
import memberSv from "../../core/sv/rest/memberSv";

const MemoDetailModal = (props) => {

    const _memoAct = async (memo,i,type) => {
        const member = Object.assign({},props.member);
        const memoInfoList = Object.assign([],props.member.memoInfoList);

        if(type === 'UPDATE')
            memoInfoList[i].memo = (memo ? memo : memoInfoList[i].memo);
        else if (type === 'INSERT')
        {
            memoInfoList.push({
                'regModDate' : {'regDate' : new Date()},memo
            });
        }

        member.memoInfoList = memoInfoList;
        await memberSv.updateMember(member);
        props._refresh(member);
    };

    return (
        <Modal
            backdrop={'static'}
            centered={true}
            size="lg"
            show={props.show}
            onHide={() =>props._memoShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    메모 정보
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className='p-4'>
                    <Card.Title>회원</Card.Title>
                    <MemberSimpleInfo member={props.member} />
                    <Card.Title>메모</Card.Title>
                    <MemoDetailList _memoAct={_memoAct} _deleteMember={props._deleteMember} member={props.member} />
                    <MemoDetailInsert _memoAct={_memoAct} member={props.member} />
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className="justify-content-md-center"
                         onClick={() =>props._memoShow(false)}>
                        <Button variant="danger" size='lg' >닫기</Button>
                    </Row>
                </Container>

            </Modal.Footer>
        </Modal>
    );
};

export default MemoDetailModal;
