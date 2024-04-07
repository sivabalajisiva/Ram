
import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navb.css'

function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Development</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <nav className='demon'>
            <NavLink to='/' >Home</NavLink>
        <NavLink to='/About' >About</NavLink>
        <NavLink to='/Contect'>Portfolio</NavLink>
             </nav>

          </Nav>
          <button className='butt'>Contact Me</button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navb;