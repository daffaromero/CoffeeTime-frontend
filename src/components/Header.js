import React from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

=======
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
>>>>>>> b609070874900934ecdb8c7af5c3c611a4d59235
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
<<<<<<< HEAD
            <LinkContainer to='/'>
                <Navbar.Brand>COFFEETIME</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link>
                            <i className="fas fa-shopping-cart"></i> Cart
                        </Nav.Link>
                    </LinkContainer>
                    {userInfo ? (
                      <NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                          <NavDropdown.item>Profile</NavDropdown.item>
                        </LinkContainer>
                        <NavDropdown.item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.item>
                      </NavDropdown>
                    ) : 
                      <LinkContainer to='/login'>
                          <Nav.Link>
                              <i className="fas fa-user"></i> Sign In
                          </Nav.Link>
                      </LinkContainer>
                    }
                </Nav>
=======
          <LinkContainer to='/'>
            <Navbar.Brand>COFFEETIME</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
>>>>>>> b609070874900934ecdb8c7af5c3c611a4d59235
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
