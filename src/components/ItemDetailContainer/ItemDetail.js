import React from 'react';
import { Link } from 'react-router-dom';
const ItemDetail = ({ product }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.img} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">Nombre:{product.name}</h4>
                <p className="card-text">Categoria:{product.catergory}</p>
                <p className="card-text">Precio:{product.price}</p>
                <Link to={`/detail/${product.id}`} className="btn btn-dark btn-compra">
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;