import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.css';
import logo from '../../../img/contorno.png';

function navbar() {
    return (
        <Navbar className='sticky-top' expand="lg" style={{backgroundColor:"#20A39E"}}>
        <Container fluid>
          <Navbar.Brand href="/"><img src={logo} height='80px'/></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="Scroll"
              
              navbarScroll
            >
              <Nav.Link href="/"><i class='fa fa-home'></i>Inicio</Nav.Link>
              <Nav.Link href="/lista-taller"><i class='fas fa-toolbox'></i>Talleres</Nav.Link>
              
              
              <Nav.Link href="/contactanos" >
                
              
      <i class='fa fa-phone-square'></i>Contáctenos
              </Nav.Link>
              <Nav.Link href="">
              <i class='fa fa-question-circle-o'></i>¿Quiénes somos?</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

        

    );
}

export default navbar;