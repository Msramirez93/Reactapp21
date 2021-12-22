import React from 'react';

const ItemDetail = ({ product }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.img} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">Nombre:{product.name}</h4>
                <p className="card-text">Categoria:{product.catergory}</p>
                <p className="card-text">Precio:{product.price}</p>
            </div>
        </div>
    );
};

export default ItemDetail;