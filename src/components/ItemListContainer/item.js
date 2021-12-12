//card img,id,price,title
// card de bootstrap

const Item = ({products}) => {

    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log(`hice click en Item ${products.id}`)
    }
return (
        <div className="card" style={{width:'18rem'}} onClick={handleClick}>
                <img src={products.img} alt={products.name} class="card-img-top"/>
                <div className="card-body">
                <h4 className="card-title">Nombre:{products.name}</h4>
                <p className="card-text">Categoria:{products.catergory}</p>
                <p className="card-text">Precio:{products.price}</p> 
                {/*<a href="#" id='${producto.id}' clasName="btn btn-dark btn-compra">COMPRAR</a>*/}
                </div>
        </div>
)
}

export default Item