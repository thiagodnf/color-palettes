import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, Form, Button } from "react-bootstrap";

function Component({handleSearchTerm}) {

    return (
        <Navbar bg="light" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">
                    Color Palettes
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/thiagodnf/color-palettes">Source code</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            autoFocus="autofocus"
                            onChange={handleSearchTerm}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Component;
