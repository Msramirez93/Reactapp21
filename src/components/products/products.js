import products from './products.json';

export const getCategory = (id = "") => {
    if (id !== "") {
        return new Promise((resolve, reject) => {
            const product = products.filter(
                (prod) => parseInt(prod.category) === parseInt(id)
            );
            setTimeout(() => {
                resolve(product);
                reject("No se pueden cargar los productos");
            }, 500);
        });
    } else {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                    reject("No se pueden cargar los productos");
                }, 1000);
        });
    }
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
    { id: 1, description: 'Smart TV' },
    { id: 2, description: 'Parlantes' },
    { id: 3, description: 'Consolas' },
    { id: 4, description: 'Perifericos' },
    { id: 5, description: 'PC Gamers' },
];

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories);
        }, 500);
    });
}

