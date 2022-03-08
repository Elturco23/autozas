import React from 'react';
import {NavDropdown,Navbar,Container, Nav,Form,FormControl,Button} from 'react-bootstrap' ;
import './navbar.css';
import logo from '../../../img/contorno.png';
function navbar() {
    return (
        <div className='container-principal-navbar'>
            <Navbar className='container-navbar' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo} height='87px'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="Scroll"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="#action1"><i class='fa fa-home'></i>Inicio</Nav.Link>
        <Nav.Link href="#action2"><i class='fas fa-toolbox'></i>Talleres</Nav.Link>
        
        
        <Nav.Link href="#" >
          
        
<i class='fa fa-phone-square'></i>Contáctenos
        </Nav.Link>
        <Nav.Link href="#action2">
<i class='fa fa-question-circle-o'></i>¿Quiénes somos?</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export default navbar;