import React from "react";
import NavBarList from './cartWidget/NavBarList';
import { getCategories } from '../products/products';
import { useEffect, useState } from "react";
const NavBs = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategory(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <NavBarList categories={category} />
        </div>
    );
};
export default NavBs;