import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../../../css/SubHeader.css';
import {LinkContainer} from "react-router-bootstrap";


const ContractSubHeader = () => {

    return (
        <>
            <Navbar className="nav nav-underline" style={{marginTop:'22px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/contract/list">
                        <Nav.Link>계약관리 리스트</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contract/deleteList">
                        <Nav.Link>삭제계약 리스트</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <div className="lh-150 border-bottom"/>
        </>
    );
};

export default ContractSubHeader;
