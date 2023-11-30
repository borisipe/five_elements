import { Header } from './components/Header'
import DescripcionEmpresa from './components/DescripcionEmpresa'
import Servicio1 from './components/Servicio1'
import Servicio2 from './components/Servicio2'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <DescripcionEmpresa />
      <Servicio1 />
      <Servicio2 />
    </>
  )
}

export default App