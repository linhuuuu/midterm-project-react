import { useState } from 'react';
import AddItem from './Components/AddItem';
import DataDisplay from './Components/DataDisplay';
import DeleteItem from './Components/DeleteItem';
import UpdateItem from './Components/UpdateItem';

import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  //Items Array
  const [items, setItems] = useState([]);

  //Add Item Event
  const handleAddItem = (newItems) => {
    setItems((prevItems) => [...prevItems, newItems]);
  };

  //Delete Event
  const handleDelete = (index) => {
    const updatedItems = items.filter((item) => item.itemID !== index.itemID);
    setItems(updatedItems);
  };

  //Update Event
  const handleUpdate = (updatedItems) => {
    setItems(updatedItems);
  };

  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>INVENTORY MANAGEMENT</h1>
          <Routes>
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