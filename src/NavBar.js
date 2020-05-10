import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Navigation(){
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Navbar.Brand href="#home">Create</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="RwdNavbar">
                    <Nav className="ml-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Work</Nav.Link>
                    <Nav.Link href="#pricing">Service</Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Specialist</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation