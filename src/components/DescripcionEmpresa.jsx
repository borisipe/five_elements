import React from 'react';
import background from '../assets/terapiafloral1.png';
import logo from "../assets/Logo-5-Elementos-letra.png";
import logoWsp from "../assets/icono-whatsap.png";
import { Container, Row, Col } from 'react-bootstrap';

const phoneNumber = '56987636208';
const message = 'Hola, escribo para pedir una hora de ';

const handleClick = () => {
  const encodedMessage = encodeURIComponent(message);

  // Construye el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Redirige a WhatsApp
  window.open(whatsappLink, '_blank');
};

export default function DescripcionEmpresa() {
  return (

    
    <div>   
      <Container fluid style = {{ display: 'flex', flexDirection: 'column'}}>
      <h1></h1>
        <div className="" id = 'descripcionEmpresa-id'>
    
          <Row className="background-image justify-content-center " style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover', backgroundPosition: 'center', height: '800px',
              backgroundRepeat: 'no-repeat', 
            }}>
            
            <Row >
              <Col className="m-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)"  }}>
              
                <Row  className='h-50' style={{ zIndex: 1 }}>
                  <Col className='d-flex justify-content-center align-items-center  text-center'>
                    <img src={logo} width="600px" alt="Logo" className="img-fluid"></img>
                  </Col>             
                </Row>

                <Row className='text-white d-flex  justify-content-center text-justify text-center align-items-center' style={{ zIndex: 1 }}>
                  
                  
                  <Col >
                    <h1  className="lead mb-3" >"5 Elementos: Medicina Holística y Transpersonal" es un espacio de sanación creado por Fabiola Zavalla Guerrero, profesional del área de la salud, Terapeuta Energética y Transpersonal, ubicado en el corazón de Santiago de Chile, con una clara misión: fomentar la salud integral, el bienestar, el crecimiento personal y la expansión de la consciencia.</h1>
                  </Col>             
                </Row>

                <Row className='text-white d-flex  justify-content-center text-justify text-center align-items-center ' style={{ zIndex: 1 }}>
                  <Col>
                  <a className="btn btn-outline-light btn-sm " onClick={handleClick} role="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ marginRight: "10px" }}>
                        <img src={logoWsp} alt='WhatsApp Image 1' style={{ width: "20px", height: "20px" }} />
                      </div>
                      <div>
                        <h4>Agendar hora</h4>
                      </div>
                    </a>
                  </Col>             
                </Row>
              
              
              </Col>
              
            </Row>
           
            
          </Row>

  


        </div>

      </Container> 
    </div>

   

      
  );
}

         /*    <div style={{ height: "100%" }} id="descripcionEmpresa">
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div class="p-5 text-center bg-image rounded-3" style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: "100%",
              opacity: "0.8",
            }}>
              <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%" }}>
                <div class="d-flex justify-content-center align-items-center h-100" style={{ margin: "40px" }}>
                  <div class="text-white">
                    <img src={logo} width="600px" alt="Logo"></img>
                    <h4 class="mb-3">"5 Elementos: Medicina Holística y Transpersonal" es un espacio de sanación creado por Fabiola Zavalla Guerrero, profesional del área de la salud, Terapeuta Energética y Transpersonal, ubicado en el corazón de Santiago de Chile, con una clara misión: fomentar la salud integral, el bienestar, el crecimiento personal y la expansión de la consciencia.</h4>
                    <a className="btn btn-outline-light btn-sm " onClick={handleClick} role="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ marginRight: "10px" }}>
                        <img src={logoWsp} alt='WhatsApp Image 1' style={{ width: "20px", height: "20px" }} />
                      </div>
                      <div>
                        <h4>Agendar hora</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */