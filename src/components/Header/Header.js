import React from 'react';
import { Button, Col, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logoWhite.png';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className="header">
            <Navbar sticky="true" bg="***" variant="dark" className="customNavbar">
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" className="logo" />
                </Navbar.Brand>
                <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search your Destination..."
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Nav className="ml-auto customNav">
                    <Nav.Link href="/">News</Nav.Link>
                    <Nav.Link href="#">Destination</Nav.Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Link to={`/login`}>
                        <Button variant="warning" className="customButton">Login</Button>
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;