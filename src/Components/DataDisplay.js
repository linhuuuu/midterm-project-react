import React, { useState, useEffect } from 'react';

const DataDisplay = ({ items }) => {
  const [formData, setFormData] = useState({ search: '' });    //FORM HANDLING
  const [filteredItems, setFilteredItems] = useState(items);  //FILTERED ARRAY
  const [category, setCateg] = useState("");                  //CATEGORY TOGGLE
  const [lowFilter, setLowFilter] = useState(false);          //LOW STOCK FILTER
  const [sortType, setSortType] = useState("");               //SORT FILTER
  const [sortOrder, setSortOrder] = useState("");             //ORDER FILTER

//Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
};

// LOW STOCK TOGGLE  
  const handleLowStock = () => {
    setLowFilter(!lowFilter);
};

//DISPLAY ITEMS - use effect to enable live results using dependencies
  useEffect(() => {
  //FILTER items based on two conditions: 1.IF toggle=OFF, all items true, 2.IF true, item is not filtered.
    const newFilteredItems = items.filter((item) =>
      (category === "" || item.category === category) &&  //FILTERS ITEM CATEGORY
      (!lowFilter || item.quantity < 5) && //FILTERS QUANTITY
      (!formData.search || item.itemID === formData.search.trim()) //FILTERS ID SEARCHING
    );

  // SORTING
    if (!sortOrder || !sortType) {
      setFilteredItems(newFilteredItems); //If SORT toggles=false, pass filtered array.
    } else {  //Proceed to sorting. Takes two arguments, a and b. Determine their order by returning the sorting parameter.
      const sortedItems = newFilteredItems.sort((a, b) => { 
          if (sortOrder === "Ascending") {
            return category==="Quantity" ? (a.quantity - b.quantity) : ( a.price - b.price)
          } else if (sortOrder === "Descending") {
            return category==="Quantity" ? (b.quantity - a.quantity) : ( b.price - a.price)
          }else
        return 0; //default
      });
      setFilteredItems(sortedItems); //pass new sorted array
    }
  }, [category, lowFilter, items, formData.search, sortOrder, sortType]); //dependencies

  return (
    <div>
      <div>
        <h2>Data Display</h2>
{/* Search BOX */}
        <label htmlFor="search">Search:</label> 
        <input
          type="text"
          id="search"
          name="search"
          value={formData.search}
          onChange={handleInputChange}
          placeholder="Input ID to search."
          className='form-control'
        />

{/* Category Selection */}
        <select
          name="categ"
          id="categ"
          onChange={(e) => setCateg(e.target.value)}
          value={category}
        >
          <option value="">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>

{/*ASCENDING OR DESCENDING*/}
        <select
          name="order"
          id="order"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="">Choose Field</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>

{/*PRICE OR QUANTITY*/}
        <select
          name="type"
          id="type"
          onChange={(e) => setSortType(e.target.value)}
          value={sortType}
          placeholder="Choose Order"
        >
          <option value="">Choose Order</option>
          <option value="Price">Price</option>
          <option value="Quantity">Quantity</option>
        </select>

{/* LOW STOCK TOGGLE */}
        <button
          name="low"
          id="low"
          onClick={handleLowStock}
        >
          {lowFilter ? "Show All Stock" : "Show Low Stock"}
        </button>
      </div>

{/* DATA TABLE */}
      <div>
        <table className='table table-striped table-dark table-bordered table-hover table-responsive'>
          <caption>Inventory</caption>
          <thead className='thead-dark'>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* IF THERE ARE  NO ITEMS */}
            { filteredItems.length === 0 ? (<p>No items found!</p>):  
            (filteredItems.map((item) => (
              <tr key={item.itemID}>
                <td>{item.itemID}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            )))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;
