import React  from 'react';
import { Navbar,Nav, Button, Container } from 'react-bootstrap';
import './Header.scss';
import logo from '../../imagesAll/images/aircncLogo.png';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <Navbar bg="white" className="border-bottom" expand="lg">
            <Container>

            <Navbar.Brand href="#home">
                <Link to="/">
                    <img src={logo} alt="AirCNC" className='logo-size'/>
                </Link>
            </Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/host-home" className="nav-link">Host your Home</Link>
                    <Link to="/host-experience" className="nav-link">Host your Experience</Link>
                    <Link to="/login"><Button variant="primary" className="btn-rounded">Login</Button></Link>
                </Nav>   
            </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;