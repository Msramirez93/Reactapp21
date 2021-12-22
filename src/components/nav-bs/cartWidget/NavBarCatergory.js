import { Link } from 'react-router-dom';

const NavBarCategory = ({ category }) => {
    return (
        <li>
            <Link className="list" to={`/category/${category.id}`}>
                {category.description}
            </Link>
        </li>
    );
};

export default NavBarCategory;