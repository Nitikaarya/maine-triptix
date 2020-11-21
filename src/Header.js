import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header--fixed">
            <Navbar >
            <Navbar.Brand href="#home" className="headname">Maine</Navbar.Brand>
            <Nav href="#home" className="main">Trip Tix</Nav> 
            <Nav className="mr-auto" style={{marginLeft:"23%"}}>
            <Nav.Link href="#home" className="sty">Home</Nav.Link>
            <Nav.Link href="/About" class="nav-link">About</Nav.Link>
            <Nav.Link href="/Services" class="nav-link">Services</Nav.Link>
            <Link href="/pricing" className="nav-link" to={"/P"}>Pricing</Link>
            <Nav.Link href="/Rules" className="nav-link">Rules</Nav.Link>
            <Nav.Link href="/Login" className="nav-link">Login</Nav.Link>
            <Nav.Link href="/Register" className="nav-link">Register</Nav.Link>
            </Nav>
    <Form inline>   
    </Form>
  </Navbar>
</div>
    )
}
export default Header