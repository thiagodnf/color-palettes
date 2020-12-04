import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Component() {

    return (
        <Navbar bg="light" fixed="top">
            <Navbar.Brand href="#home">
                Color Palettes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://github.com/thiagodnf/color-palettes">Source code</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Component;
