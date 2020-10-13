import React,{useState, useEffect} from 'react';
import memberSv from '../../core/sv/rest/memberSv';
import Modal from "react-bootstrap/Modal";
import { Card, Button, Row, Container } from "react-bootstrap";
import MemberUpdateInfo from '../inc/member/MemberUpdateInfo';

export default function MemberDetailModal(props) {

    const [member,setMember] = useState(props.member);

    const _setMember = (value,type) => {
        
        setMember((pre) => ({
            ...pre,
            [type] : value
        }));
    };

    const _memberUpdate = async () => {
        await memberSv.updateMember(member,{message : "회원이 등록/수정 되었습니다."});
        await props._refresh();
    };

    useEffect( () => {
        console.log("A");
    },[setMember]);

    return (
        <Modal
            backdrop={'static'}
            centered={true}
            size="lg"
            show={props.show}
            onHide={() => props._memberShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    회원 정보
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className='p-4'>
                    <Card.Title>회원 상세 정보</Card.Title>
                    {
                        member &&
                        <MemberUpdateInfo _setMember={_setMember} member={member} />
                    }
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className="justify-content-md-center">
                        <Button variant="danger" size='lg' className="m-1" onClick={() => props._memberShow(false)}>닫기</Button>
                        <Button variant="primary" size='lg' className="m-1" onClick={() => _memberUpdate(false)}>저장</Button>
                    </Row>
                </Container>

            </Modal.Footer>
        </Modal>
    );
};
