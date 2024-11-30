import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar className="Nav" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >FC Market</Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <i className="fa fa-shopping-cart"></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/account">
                            <Nav.Link >
                                <i className="fa fa-user"></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>

    )
}
export default Header