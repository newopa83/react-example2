import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../../../css/SubHeader.css';
import {LinkContainer} from "react-router-bootstrap";


const ApprovalSubHeader = () => {

    return (
        <>
            <Navbar className="nav nav-underline" style={{marginTop:'22px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/approval/list">
                        <Nav.Link>결제 리스트</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <div className="lh-150 border-bottom"/>
        </>
    );
};

export default ApprovalSubHeader;
