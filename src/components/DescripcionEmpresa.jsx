import React from 'react';
import background from '../assets/terapiafloral1.png'

export default function DescripcionEmpresa() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div class="p-5 text-center bg-image rounded-3" style={{
          backgroundImage: `url(${background})`,
          height: "100%",
          opacity: "0.8",
        }}>
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%" }}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">5 Elementos</h1>
                <h4 class="mb-3">"5 Elementos: Medicina Holística y Transpersonal" es un espacio de sanación creado por Fabiola Zavalla Guerrero, profesional del área de la salud, Terapeuta Energética y Transpersonal, ubicado en el corazón de Santiago de Chile, con una clara misión: fomentar la salud integral, el bienestar, el crecimiento personal y la expansión de la consciencia.</h4>
                <a className="btn btn-outline-light btn-sm" href="#!" role="button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ marginRight: "10px" }}>
                    <img src='https://www.svgrepo.com/show/106976/whatsapp.svg' alt='WhatsApp Image 1' style={{ width: "20px", height: "20px" }} />
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
    </div>

  );
}