import React, { useRef } from 'react';
import Modal from "react-bootstrap/Modal";
import etcSv from "../../core/sv/rest/etcSv";
import { Card, Button, Row, Container, Form } from "react-bootstrap";

export default function SmsSendModal(props) {

    const titleRef = useRef();
    const msgRef = useRef();

    const _smsSend = async () => {

        const title = titleRef.current.value;
        const message = msgRef.current.value;

        if (!message) {
            alert("내용을 입력해주세요.");
            return;
        }
        await etcSv.smsSend({title,message,recvList : new Array(props.member.phone), smsKind : 'MANUAL'});
    };

    return (
        <Modal
            backdrop={'static'}
            centered={true}
            size="lg"
            show={props.show}
            onHide={() => props._smsShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    문자 발송
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className='p-4'>
                    <Card.Title>문자 보내기</Card.Title>
                    <Form.Group>
                        <Form.Control type="text" placeholder="제목" ref={titleRef} />
                        <hr />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" ref={msgRef} placeholder="내용을 입력하세요." />
                        </Form.Group>
                    </Form.Group>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className="justify-content-md-center">
                        <Button variant="danger" size='lg' className="m-1" onClick={() => props._smsShow(false)}>닫기</Button>
                        <Button variant="primary" size='lg' className="m-1" onClick={() => _smsSend(false)}>문자 보내기</Button>
                    </Row>
                </Container>

            </Modal.Footer>
        </Modal>
    );
};
