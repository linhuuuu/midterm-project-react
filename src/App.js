
import { useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem';
import DataDisplay from './Components/DataDisplay';
import DeleteItem from './Components/DeleteItem';
import UpdateItem from './Components/UpdateItem';

function App() {
  //Items Array
  const [items, setItems] = useState([]);

  //function to add new item
  const addNewItem = (newItems) => {
    setItems((prevItems) => [...prevItems, newItems]);
  };

  //Delete
  const handleDelete = (index) => {
    const updatedItems = items.filter((item) => item.itemID !== index.itemID);
    setItems(updatedItems);
  };


  //Update
  const handleUpdate = (updatedItems) => {
    setItems(updatedItems);
  };

return(
  <div className="App">
    <header className="App-header">
      <h1>INVENTORY MANAGEMENT</h1>
      <AddItem addNewItem={addNewItem} items={items}></AddItem>

      <DataDisplay items={items}></DataDisplay>

      <DeleteItem handleDelete={handleDelete} items={items}></DeleteItem>

      <UpdateItem handleUpdate={handleUpdate} items={items}></UpdateItem>
    </header>
  </div>
);
}

export default App;