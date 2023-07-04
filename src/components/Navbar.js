import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, Form } from "react-bootstrap";

export default function Component({ handleSearchTerm }) {

    return (
        <Navbar fixed="top" expand="sm" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/" className="gradient-text">
                    Color Palettes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/thiagodnf/color-palettes">Source code</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            onChange={handleSearchTerm}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
