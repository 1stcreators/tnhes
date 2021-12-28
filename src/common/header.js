import React from 'react';
import logo from '../../src/assets/images/logo.svg';
import {Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
function Header() {
  return (

    <header>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
         <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <Link className="nav-link" to="/"> Home </Link>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">IT Services</a>
             </li>
             <li className="nav-item">
              <a className="nav-link" href="#">Mechanical Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Staffing Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
           </ul>
           <form className="d-flex">
             <button className="btn btn-dark" type="">Contact Us</button>
           </form>
         </div>
       </div>
     </nav> */}

<Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className="nav-link" to="/"> Home </Link>
      <Link className="nav-link" to="/ItServices"> IT Services </Link>
      <Link className="nav-link" to="/staffing-services"> Staffing Services </Link>
      <Link className="nav-link" to="/AboutUs"> About Us </Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes" className="btn btn-dark">
         Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
     </header>

  );
}

export default Header;
