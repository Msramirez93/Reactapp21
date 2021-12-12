//funtion itemlist mapea el complemento del item
import Item from "./item";


const ItemList = ({ products = []}) => {
    console.log('Aca estan los productos en ItemList', products)
    return (
        <ul className="ListGroup" onClick={() => console.log('hice click en ItemList')} style={{backgroundColor: 'grey'}}>
            {products.map(products =><Item key={products.id} products={products}/> )}
        </ul>
    )
}

export default ItemList