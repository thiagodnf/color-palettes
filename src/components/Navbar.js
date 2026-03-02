import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import ColorThemeNavItem from "./ColorThemeNavItem";

export default function Component() {

    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#" className="gradient-text2">
                    <img
                        src="/color-palettes/images/logo-full-dark.png"
                        height="30"
                        className="d-inline-block align-top"
                    />
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
