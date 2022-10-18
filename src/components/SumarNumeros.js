import batman from './../assets/images/batman.jpg';

function SumarNumeros(props) {
    const sumarNumeros = (num1, num2) => {
        num1 = parseInt(props.numero1);
        num2 = parseInt(props.numero2);
        var suma = num1 + num2;
        console.log("La suma es " + suma);
    }

    var imageSize = {
        width: "150px", height: "150px"
    }
    return (
        <div>
            <h1>Component SumarNumeros</h1>
            <button onClick={ () => sumarNumeros(7,9) }>
                Sumar 7 + 9
            </button>
            <button onClick={ () => sumarNumeros(6,5) }>
                Sumar 6 + 5
            </button>            
            <img src={batman} style={imageSize}/>
        </div>
    );
}

export default SumarNumeros;