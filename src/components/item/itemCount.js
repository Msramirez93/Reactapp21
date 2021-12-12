import React, {useState} from 'react';
import "./styles.scss"

const ItemCount = ({onAdd}) => {

    // const [date, setDate] = useState("");
    // const [count, setCount] = useState (0);
    // const [color, setColor] = useState ("blue")

    const [contador, setContador] = useState(0);
    const [fecha, setFecha] = useState("");
    const [color, setColor] = useState("white");

    const handleColor = (e) => {
        const colorcito = e.target.value;
        setColor(colorcito);
    }

    const handleClick = () => {
        //No quiero que supere las 10 unidades if para
        //controlar la cantidad
        if (contador < 10) {
            setContador(contador + 1);
            const fecha = new Date().toLocaleString();
            setFecha(fecha);
        }
    }

    return (
        <div
        className = "itemCount"
        style = {{
            //cambiar por una img background
            backgroundColor: color
        }}
        >
            <h4> Ultimo click: {fecha} </h4>
            <button onClick={handleClick}> Anadir al carrito</button>
            <span>{contador}</span>
            <select name="colors" id="colors" onChange={handleColor}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
    )
}//las opciones son para cambiar de opcion despues agregar imagenes
//de productos

export default ItemCount