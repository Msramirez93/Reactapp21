import React from 'react';
import { useState } from 'react';

const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}
const ItemDetail =({ product, inputType = 'input' }) => {
    const Count = inputType === 'input' ? InputCount : ButtonCount

    const addToCart = (count) => {
        console.log(`Agregado al carrito ${count}`)
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.img} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">Nombre:{product.name}</h4>
                <p className="card-text">Categoria:{product.catergory}</p>
                <p className="card-text">Precio:{product.price}</p>
                <Count onConfirm={addToCart} maxQuantity={product?.stock}/>
            </div>
        </div>
    );
};

export default ItemDetail; 