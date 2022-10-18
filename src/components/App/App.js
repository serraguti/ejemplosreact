import './App.css';
import SumarNumeros from '../SumarNumeros';
import SaludoHijo from './../SaludoHijo';
import Matematicas from '../Matematicas';
import Contador from '../Contador';

function App() {
  //QUEREMOS UN METODO EN EL PARENT QUE SEA 
  //LLAMADO DESDE EL HIJO
  const metodoPadre = (descripcion) => {
    console.log("Soy " + descripcion);
  }

  const tripleNumero = (valor) => {
    var resultado = parseInt(valor) * 3;
    console.log("Triple es " + resultado);
  }

  return (
    <div className="App">
        <h1>Componente App</h1>
        {/* <Contador inicio="22"/>
        <Contador inicio="44"/>
        <Contador inicio="66"/>
        <Contador inicio="14"/> */}
        <Matematicas numero="2" tripleNumero={tripleNumero} />
        <Matematicas numero="44" tripleNumero={tripleNumero}/>
        {/* ENVIAMOS EL METODO DEL PADRE AL HIJO CON UN 
        NOMBRE DE PROPS */}
        {/* <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/> */}
    </div>
  );
}

export default App;
