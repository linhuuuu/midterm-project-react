import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className='nav-link'>Inventory Management System</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className='nav-link'>Add Item</Link>
                </li>
                <li className="nav-item">
                    <Link to="/delete" className='nav-link'>Delete Item</Link>
                </li>
                <li className="nav-item">
                    <Link to="/update" className='nav-link'>Update Item</Link>
                </li>
                <li className="nav-item">
                    <Link to="/display" className='nav-link'>Display Inventory</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;