import {Navbar, Container, Nav} from 'react-bootstrap';

function Header() {
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Alexa's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Product list</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default Header;
