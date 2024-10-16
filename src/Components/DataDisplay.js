import React, { useState, useEffect } from 'react';

const DataDisplay = ({ items }) => {
  const [category, setCateg] = useState("All");
  const [lowFilter, setLowFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);

  // Handle low stock toggling
  const handleLowStock = () => {
    setLowFilter(!lowFilter);
  };

  // useEffect to re-filter items whenever category or lowFilter changes
  useEffect(() => {
    // Filtering logic here
    const newFilteredItems = items.filter((item) =>
      (category === "All" || item.category === category) &&
      (!lowFilter || item.quantity < 5)
    );
    setFilteredItems(newFilteredItems);
  }, [category, lowFilter, items]);  

  return (
    <div>
      <div>
        <h2>Data Display</h2>

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

        <select
          name="categ"
          id="categ"
          placeholder="Display by Category"
          onChange={(e) => setCateg(e.target.value)}
          value={category}
        >
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
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
