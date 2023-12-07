import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from "../assets/logo-sin-letras.png";
import { Navbar, Nav } from 'react-bootstrap';


export const Header = () => {
    return (
        <>
     <Navbar class="navbar navbar-expand-lg custom-navbar fixed-top vw-100" style={{ backgroundColor: "rgb(78, 61, 100)"}} >
        <Navbar.Brand href="#" className='px-5'>
          <img src={logo} width="60px" alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav">
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
            <Nav.Link href="#descripcionEmpresa-id" className='px-3 text-light'>Inicio</Nav.Link>
            <Nav.Link href="#descripcionEmpresa-id" className='px-3 text-light'>Agendar Hora</Nav.Link>
            <Nav.Link href="#servicio-id" className='px-3 text-light'>Servicios</Nav.Link>
            <Nav.Link href="#testimonio-id" className='px-3 text-light'>Testimonios</Nav.Link>
            <Nav.Link href="#contacto-id" className='px-3 text-light'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    )
};