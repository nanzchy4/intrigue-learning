import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaChalkboardTeacher} from 'react-icons/fa';
import header from './Header.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Header = () => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () =>{
        setTheme(!theme);
    }
   
    return (
        <div className="navigation">
             <Navbar collapseOnSelect expand="lg" bg={ theme ? "dark" : "light"} variant = { theme ? "dark" : "light"}>
                <Container>
                    <span className='icon me-2' ><FaChalkboardTeacher/></span>
                    <Navbar.Brand href="#home">Intrigue Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/courses' className='navComp' >Courses</Link></Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                               { theme ?
                                <Button onClick={changeTheme} variant="light">Light</Button>:
                                <Button onClick={changeTheme} variant="light">Dark</Button>
                               }
                            </Nav.Link>
                            <Nav.Link  href="#memes">
                             <Link to='/login'><Button variant="success">Login</Button></Link>
                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;