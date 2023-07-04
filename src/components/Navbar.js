import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, Form } from "react-bootstrap";
import ColorThemeNavItem from "./ColorThemeNavItem";

export default function Component() {

    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/" className="gradient-text">
                    Color Palettes
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <ColorThemeNavItem />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
