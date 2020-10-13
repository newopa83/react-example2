import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import '../../../css/SubHeader.css';
import {LinkContainer} from "react-router-bootstrap";


const BoardSubHeader = () => {

    return (
        <>
            <Navbar className="nav nav-underline" style={{marginTop:'22px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/board/list">
                        <Nav.Link>게시글 리스트</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/board/insert">
                        <Nav.Link>게시글 등록</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <div className="lh-150 border-bottom"/>
        </>
    );
};

export default BoardSubHeader;
