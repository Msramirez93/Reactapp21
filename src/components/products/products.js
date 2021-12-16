import products from './products.json';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 3000)
    })
}
const categories = [
    {id:'1',description:"Smart 49"},
    {id:'2',description:"Parlante"},
    {id:'3',description:"consola de video juego"}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 5000)        
    })
}

