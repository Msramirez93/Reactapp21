import React from 'react';
import NavBarCategory from './NavBarCatergory';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBarList = ({ categories }) => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="/#">
                Electroplace
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav">
                <Link to={"/"}>Electroplace</Link>
                <ul>
                {categories.map((category) => (
                    <NavBarCategory className="btn btn-dark btn-compra" key={category.id} category={category} />
                ))}
                </ul>
            </div>
                <CartWidget />
            </div>
        </div>
        </nav>
    </div>
    );
};

export default NavBarList;



