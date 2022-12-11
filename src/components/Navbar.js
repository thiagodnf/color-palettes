import Navbar from "react-bootstrap/Navbar";
import {Nav, Container} from "react-bootstrap";

function Component() {

    return (
        <Navbar bg="light" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">
                    Color Palettes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/thiagodnf/color-palettes">Source code</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Component;
