import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";


export default function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand>Todo App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}