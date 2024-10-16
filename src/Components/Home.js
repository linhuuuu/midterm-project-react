import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/add">Add Item </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/delete">Delete Item </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/update">Update Item </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/display">Display Inventory </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Home;