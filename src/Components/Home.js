import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container home'>
    <div className='row justify-content-center align-items-center text-center' style={{ height: '100vh' }}>
        <div className='col-12'>
            <h2 className='display-4'>INVENTORY MANAGEMENT SYSTEM</h2>
            <p className='lead'>Let's get started.</p>
        
            <div className='btn-group'>
                <Link to="/add" className='btn btn-primary'>Add Items</Link>
                <Link to="/display" className='btn btn-secondary'>Go to Inventory</Link>
            </div>
        </div>
    </div>
</div>

    );
}

export default Home;