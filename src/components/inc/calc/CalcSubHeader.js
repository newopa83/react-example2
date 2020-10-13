import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../../../css/SubHeader.css';
import {LinkContainer} from "react-router-bootstrap";


const CalcSubHeader = () => {

    return (
        <>
            <Navbar className="nav nav-underline" style={{marginTop:'22px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/calc/list">
                        <Nav.Link>정산입금 리스트</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/calc/insert">
                        <Nav.Link>정산 등록</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <div className="lh-150 border-bottom"/>
        </>
    );
};

export default CalcSubHeader;
