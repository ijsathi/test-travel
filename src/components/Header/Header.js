import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar className='header fw-bold' sticky='top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img style={{width:"60%"}} src="https://demo.gridgum.com/templates/Travel-agency/images/logo.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#destination">Destination</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;