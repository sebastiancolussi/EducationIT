import './App.css';
// import ComponenteTituloH1 from './Clase2/ComponenteTituloH1'
// import ListaSuper from './Clase2/ListaSuper'
// import TituloConMuchosEstilos from './Clase2/TituloConMuchosEstilos';
// import TituloConMuchosEstilos2 from './Clase2/TituloConMuchosEstilos2';
// import TituloConParrafo from './Clase2/TituloConParrafo';
// import EjemploInput1 from './Clase-4/EjemplosDelInput/EjemploDelInput';
// import EjemploPassword from './Clase-4/EjemplosDelInput/EjemploPassword';
import { Formulario } from './Clase-4/Formulario';

const styles ={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
  
}

function App() {
  return (
    <div style={styles}>
      {/* <ComponenteTituloH1 />
      <ListaSuper />
      <TituloConParrafo />
      <TituloConMuchosEstilos />
      <TituloConMuchosEstilos2 /> */}
      {/* <EjemploInput1 />
      <EjemploPassword/> */}
      <Formulario />
      

    </div>
  );
}

export default App;
