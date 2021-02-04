import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, Container } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import withLogout  from '../hoc/withLogout';
 
const Navigation = (props) => {
    const { auth } = useContext(AuthContext);
    const isLoggedIn = auth.isLoggedIn && auth.user;
    let authMenu;
    if (isLoggedIn) {
        authMenu =  <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
            <NavDropdown.Item href="#" onClick={() => props.logout()}>Logout</NavDropdown.Item>
        </NavDropdown>;
    } else {
        authMenu = <>
            <NavItem eventkey={3} href="/login">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </NavItem>
             <NavItem eventkey={4} href="/register">
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
             </NavItem>
        </>;
    }

    return (
        <Navbar expand="md" variant="light" bg="white" className="shadow-sm">
            <Container>
                <Nav.Link className="navbar-brand" as={Link} to="/">Laravel Sanctum</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem eventkey={1} href="/home">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={2} href="/about">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </NavItem>
                        {authMenu}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)};

export default withLogout(Navigation);