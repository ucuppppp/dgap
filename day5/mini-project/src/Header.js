import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand>Fake Store</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/cart'>
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}