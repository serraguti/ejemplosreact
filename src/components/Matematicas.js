function Matematicas(props) {
    const { numero, tripleNumero } = props;

    const dobleNumero = () => {
        var resultado = parseInt(numero) * 2;
        console.log("Doble es " + resultado);
    }

    return (<div>
        <h1>Matematicas {numero}</h1>
        <button onClick={ () => tripleNumero(numero) }>
            Triple {numero}
        </button>
        <button onClick={ () => dobleNumero() }>
            Doble {numero}
        </button>
    </div>)
}

export default Matematicas;