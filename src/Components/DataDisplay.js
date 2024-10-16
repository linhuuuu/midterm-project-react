import React, { useState, useEffect } from 'react';

const DataDisplay = ({ items }) => {
  const [formData, setFormData] = useState({ search: '' });    //FORM HANDLING
  const [category, setCateg] = useState("All");             //CATEGORY TOGGLE
  const [lowFilter, setLowFilter] = useState(false);        //LOW STOCK FILTER
  const [filteredItems, setFilteredItems] = useState(items);//FILTERED ARRAY
  const [sortType, setSortType] = useState("Field");             //SORT FILTER
  const [sortOrder, setSortOrder] = useState("Order");

  // Handle low stock toggling
  const handleLowStock = () => {
    setLowFilter(!lowFilter);
  };

  // useEffect to re-filter items whenever category or lowFilter changes
  useEffect(() => {
    // Filtering logic here
    const newFilteredItems = items.filter((item) =>
      (category === "All" || item.category === category) &&
      (!lowFilter || item.quantity < 5) &&
      (!formData.search || item.itemID === formData.search.trim())
    );

    // Sorting
    if (sortOrder==="Order" || sortType==="Type") {
      setFilteredItems(newFilteredItems);
    } else {
      const sortedItems = newFilteredItems.sort((a, b) => {
        if (sortType === "Quantity") { // by quantity
          if (sortOrder === "Ascending") {
            return a.quantity - b.quantity;
          } else if (sortOrder === "Descending") {
            return b.quantity - a.quantity;
          }
        }

        if (sortType === "Price") { // by price
          if (sortOrder === "Ascending") {
            return a.price - b.price;
          } else if (sortOrder === "Descending") {
            return b.price - a.price;
          }
        }
        return 0;
      });

      setFilteredItems(sortedItems);
    }
  }, [category, lowFilter, items, formData.search, sortOrder, sortType]);


  //Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div>
        <h2>Data Display</h2>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          name="search"
          value={formData.search}
          onChange={handleInputChange}
          placeholder="Search"
          className='form-control'
        />

        {/* Category Selection */}
        <select
          name="categ"
          id="categ"
          placeholder="Display by Category"
          onChange={(e) => setCateg(e.target.value)}
          value={category}
        >
          <option value="All">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        {/*ASCENDING OR  DESCENDING*/}
        <select
          name="order"
          id="order"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="Order"></option>
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
          <option value="Field"></option>
          <option value="Price">Price</option>
          <option value="Quantity">Quantity</option>
          
        </select>

        <button
          name="low"
          id="low"
          onClick={handleLowStock}
        >
          {lowFilter ? "Show All Stock" : "Show Low Stock"}
        </button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.itemID}>
                <td>{item.itemID}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;
