import {Navbar, Container, Nav} from 'react-bootstrap';
import {PAGE_HOME, PAGE_SECOND, PAGE_PRODUCT_LIST} from '../App'

function Header({page, setPage}) {
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#" onClick={() => setPage(PAGE_HOME)}>Alexa's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link  href="#" onClick={() => setPage(PAGE_SECOND)}>Second Page</Nav.Link>
            <Nav.Link  href="#" onClick={() => setPage(PAGE_PRODUCT_LIST)}>Product list</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default Header;
