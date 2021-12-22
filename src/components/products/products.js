import products from './products.json';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 1000)
    })
}
export const getProductsById=(id)=>{
    return new Promise ((resolve,reject)=>{
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(()=>resolve(products),1000)
    })
}


export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0]);
            reject('No se pueden cargar los productos');
        }, 2000);
    });
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

