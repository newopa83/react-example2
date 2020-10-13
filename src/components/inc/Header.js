import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

  //const dispatch = useDispatch();

  const _logOut = () => {
   /* dispatch({
      type: 'SET_TOKEN',
      token: null
    });*/
    localStorage.setItem("adminToken",null);
    window.location.replace('/');
  };

    return (
      <div>
        <Navbar bg="light" expand="lg" className="fixed-top lh-150 border-bottom" >
          <Navbar.Brand href="/"><i className="fas fa-tint"/>&nbsp;단비 관리자</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-5">
            <Nav className="mr-auto">
              <LinkContainer to="/member">
                <Nav.Link><i className="fas fa-user"/>&nbsp;회원관리</Nav.Link>
              </LinkContainer>
              <LinkContainer to={{
                pathname :"/memo",
                state : {
                  id: 'bugguro'
                }
              }}>
              <Nav.Link><i className="fas fa-sticky-note"/>&nbsp;메모관리</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contract">
                <Nav.Link><i className="fas fa-file-signature"/>&nbsp;계약관리</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/approval">
                <Nav.Link><i className="fas fa-comment-dollar"/>&nbsp;결제관리</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/calc">
                <Nav.Link><i className="fas fa-comments-dollar"/>&nbsp;정산관리</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/board">
                <Nav.Link><i className="fas fa-clipboard-list"/>&nbsp;게시판관리</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/etc">
                <Nav.Link><i className="fas fa-exclamation-circle"/>&nbsp;기타관리</Nav.Link>
              </LinkContainer>

             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/am/login">
                 <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/am/test1Sub">
                  <NavDropdown.Item>test1Sub</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/am/test2">
                  <NavDropdown.Item>test2</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item href="!#">Separated link</NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            <Nav.Link onClick={_logOut}>
              <button className='btn btn-sm btn-danger'>로그아웃</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );

};

export default Header;
