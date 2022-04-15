import React from 'react';
import { Button, Container, Form, FormControl, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div className="bg-primary">
      <nav className="container">
      <Navbar bg="Primary" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Tech360</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Tech360
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">News</Nav.Link>
                <Nav.Link href="#action2">Leatest News</Nav.Link>
                <NavDropdown title="Account" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Login
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </nav>
    </div>
    );
};

export default Navbar;