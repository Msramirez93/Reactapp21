import React, { useState, useEffect } from 'react';
import { getProductsById } from '../products/products';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { paramId } = useParams();
    console.log(paramId);
    const [hayProducto, setHayProduct] = useState(false);

    useEffect(() => {
        getProductsById(paramId)
            .then((item) => {
                setProduct(item);
                setHayProduct(true);
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {
            setProduct();
        };
    }, [paramId]);

    return <div>{hayProducto ? <ItemDetail product={product} /> : <div>Cargando...</div>}</div>;
};

export default ItemDetailContainer