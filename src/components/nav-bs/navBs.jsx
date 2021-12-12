import React from "react";
import CartWidget from "./CartWidget";

const NavBs = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/#">Pizzas las Heras</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#">Contactame</a>
        </li>
        </ul>
    </div>
    <CartWidget/>
    </div>
    
</nav>
    )

    
}
export default NavBs