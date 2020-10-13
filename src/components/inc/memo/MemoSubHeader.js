import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../../../css/SubHeader.css';
import {LinkContainer} from "react-router-bootstrap";


const MemoSubHeader = () => {

    return (
        <>
            <Navbar className="nav nav-underline" style={{marginTop:'22px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/memo/list">
                        <Nav.Link>메모 리스트</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <div className="lh-150 border-bottom"/>
        </>
    );
};

export default MemoSubHeader;
