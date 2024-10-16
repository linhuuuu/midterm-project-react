import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <Link to="/" className='navbar-brand'>Inventory Management System</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
