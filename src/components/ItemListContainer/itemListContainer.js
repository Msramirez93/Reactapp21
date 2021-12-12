import React from "react";
import { useState,useEffect } from 'react';
import ItemCount from "../item/itemCount";
import ItemList from "./itemList";
import {getProducts} from "../products/products";


const ItemlistContainer= () =>{
    const [products, setProducts] = useState([])


    useEffect(() => {
        const list = getProducts()
        
        list.then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        
    }, [])

    return (
        <div className="ItemListContainer" onClick={() => console.log('hice click en ItemListContainer')} >
            <ItemList  products={products}/>
            {/*<ItemCount stock={10} initial={1}/>*/}
            
        </div>
    )    
}
export default ItemlistContainer