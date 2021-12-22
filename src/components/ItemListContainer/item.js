// card de bootstrap,card img,id,price,title
import { Link } from "react-router-dom" ;   

const Item = ({products}) => {
    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log(`hice click en Item ${products.id}`)
    }
return (
    
        <div className="container ">
            <div className="row mx-auto">
                <div className="col-12">
                    <div className="card  col-md-6 col-lg-4 mb-2 mb-md-0 text-center" style={{width:'18rem'}} onClick={handleClick}>
                        <img src={products.img} alt={products.name} className="card-img-top"/>
                        <div className="card-body">
                            <h4 className="card-title">Nombre:{products.name}</h4>
                            <p className="card-text">Categoria:{products.category}</p>
                            <p className="card-text">Precio:{products.price}</p> 
                            <Link  className="btn btn-dark btn-compra" to={`/item/${products.id}`}>Ver Detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}

export default Item