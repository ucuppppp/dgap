import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" bg="info">
      <Container>
        <Navbar.Brand href="/">Company Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'>
            <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
            <Nav.Link href="/about">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/projects'>
            <Nav.Link href="/projects">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
