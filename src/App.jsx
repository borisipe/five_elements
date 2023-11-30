import { Header } from './components/Header'
import DescripcionEmpresa from './components/DescripcionEmpresa'
import Servicio1 from './components/Servicio1'
import Servicio2 from './components/Servicio2'
import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetasServicios1 from '../../../5_elementos/src/components/TarjetasServicios1';
import Testimonios from '../../../5_elementos/src/components/Testimonios';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Header />
      <DescripcionEmpresa />
      <Servicio1 />
      <Servicio2 />
      <TarjetasServicios1 />
      <Testimonios />
      <Contacto />
    </>
  )
}

export default App