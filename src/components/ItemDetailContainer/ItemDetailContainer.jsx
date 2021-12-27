import React, { useState, useEffect } from 'react';
import { getItem } from '../products/products';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    console.log(product)
    const [hayProducto, setHayProduct] = useState(false);
    


    useEffect(() => {
        const list = getItem();

        list.then((item) => {
            setProduct(item);
            setHayProduct(true);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    return <div>
        {hayProducto ? <ItemDetail product={product} /> : <div>Cargando...</div>}
    
    </div>;

};

export default ItemDetailContainer