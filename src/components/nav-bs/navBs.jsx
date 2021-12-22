import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBs = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/#">Electroplace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="navbar-nav">
            <Link to={'/'} className=" nav-item nav-link active" aria-current="page" >list</Link>
            <Link to={'/detail'}className=" nav-item nav-link">Detail</Link>
            <Link to={'/count'}className=" nav-item nav-link">Count</Link>
        </div>
    </div>
    <CartWidget/>
    </div>
    
</nav>
    )

    
}
export default NavBs