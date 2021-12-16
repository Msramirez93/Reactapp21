import { getProducts } from "../products/products"

export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getProducts[1])
        }, 3000)        
    })
}