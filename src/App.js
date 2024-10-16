//Modules
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import AddItem from './Components/AddItem';
import DataDisplay from './Components/DataDisplay';
import DeleteItem from './Components/DeleteItem';
import UpdateItem from './Components/UpdateItem';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styles.css';

function App() {
  //Items Array
  const [items, setItems] = useState([]);

  //Add Item Event
  const handleAddItem = (newItems) => {
    setItems((prevItems) => [...prevItems, newItems]); // concantenates previous items to the newly added item.
  };

  //Delete Event
  const handleDelete = (index) => {
    //Filter out index ID = item ID. Passed as an array value
    const updatedItems = items.filter((item) => item.itemID !== index.itemID); 
    setItems(updatedItems); //New Value passed to item usestate
  };

  //Update Event
  const handleUpdate = (updatedItems) => {
    setItems(updatedItems); //new array value passed to item usestate
  };

  return (
    <Router>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          <h1>INVENTORY MANAGEMENT</h1>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/add" element={<AddItem handleAddItem={handleAddItem} items={items} />} />
            <Route path="/display" element={<DataDisplay items={items} />} />
            <Route path="/delete" element={<DeleteItem handleDelete={handleDelete} items={items} />} />
            <Route path="/update" element={<UpdateItem handleUpdate={handleUpdate} items={items} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;