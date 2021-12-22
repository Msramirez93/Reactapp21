import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './itemList';
import { getCategory } from '../products/products';
import { useParams } from 'react-router-dom';


const ItemlistContainer= () =>{
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [hayProducto, setHayProduct] = useState(false);

    useEffect(() => {
        getCategory(categoryId)
            .then((res) => {
                setProducts(res);
                if (res.length !== 0) {
                    setHayProduct(true);
                } else {
                    setHayProduct(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            {hayProducto ? <ItemList products={products} /> : <div>Cargando...</div>}
        </div>
    );
}
export default ItemlistContainer