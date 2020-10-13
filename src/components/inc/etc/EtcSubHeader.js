import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../../../css/SubHeader.css';
import {LinkContainer} from "react-router-bootstrap";


const EtcSubHeader = () => {

    return (
        <>
            <Navbar className="nav nav-underline" style={{marginTop:'22px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/etc/smsSendList">
                        <Nav.Link>문자발송 리스트</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/etc/telegramSendList">
                        <Nav.Link>텔레그램 리스트</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/etc/contractCommonList">
                        <Nav.Link>서류검토 메시지</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <div className="lh-150 border-bottom"/>
        </>
    );
};

export default EtcSubHeader;
