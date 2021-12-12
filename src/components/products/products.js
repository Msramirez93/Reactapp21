import products from './products.json';

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 3000)
    })
};