import React, { useState } from 'react';
const UpdateItem = ({ handleUpdate, items }) => {  //item parameterized from app.js

  //item details arrays
  const [formData, setFormData] = useState({
    itemID: '',
    name: '',
    quantity: '',
    price: '',
    category: '',
    newVal: ''
  });
  const [text, setText] = useState("");
  const [selection, setSelection] = useState("Price");
  const [errors, setErrors] = useState({});
  const [changes, setChanges] = useState({ prev: '', new: '', category:''});
  // Handle form 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // ID VALIDATION
    if (!formData.itemID.trim()) {
      newErrors.itemID = 'ID is required';
      // ID Duplicate
    } else if (!items.find(item => item.itemID === formData.itemID.trim())) {
      newErrors.itemID = 'ID does not exist.';
    }

  // NUMERIC VALIDATIONS - Additionally checks if value is a whole number.
    // QUANTITY VALIDATION 
    if (!formData.newVal.trim()) {
      newErrors.newVal = 'Quantity is required';
    } else if (isNaN(formData.newVal) || Number(formData.newVal) <= 0) {
      newErrors.newVal = 'Please enter an appropriate number';
    }
  
    // If there are errors, set them and do not submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Reset errors if the form is submitted successfully
      setErrors({});
      const updatedItems = items.map((item) => {
        if (item.itemID === formData.itemID.trim()) {
          setText("Item " + item.itemID + " (" + item.name + ") " + selection + " has been changed.");
          setChanges({
            old: selection === "Price" ? item.price  :  item.quantity,
            new: formData.newVal,
            category: selection
          });
          // 
          return {
            ...item,
            price: selection === "Price" ? formData.newVal : item.price,
            quantity: selection === "Quantity" ? formData.newVal : item.quantity
          };
        }
        return item;
      });

      handleUpdate(updatedItems);


      // Optionally reset form data
      setFormData({
        itemID: '',
        name: '',
        newVal: ''
      });
    }
  };


  //Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='container'>
      <h2>Update an Item</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="itemID">ID:</label>
          <input
            type="text"
            id="itemID"
            name="itemID"
            value={formData.itemID}
            onChange={handleInputChange}
            placeholder="Enter Item ID"
            className='form-control'
          />
          {errors.itemID && <p style={{ color: 'red' }}>{errors.itemID}</p>}
        </div>

        <label htmlFor="itemID">Change:</label>
        <select
          name="categ"
          id="categ"
          placeholder="Price or Quantity"
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value="Price">Price</option>
          <option value="Quantity">Quantity</option>
        </select>

        <div>
          <label htmlFor="newVal">New Value</label>
          <input
            type="text"
            id="newVal"
            name="newVal"
            value={formData.newVal}
            onChange={handleInputChange}
            placeholder="Enter Name"
            className='form-control'
          />
          {errors.newVal && <p style={{ color: 'red' }}>{errors.newVal}</p>}
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
        {text && <p>{text}</p>}
      </form>

      <div className='container mt-4'>
  <div className='row'>
    <div className='col'>
      <div className='p-3 border rounded shadow'>
        {/* Old value */}
        <p>
          OLD {changes.category === "Price" ? "PRICE" : "QUANTITY"}: {changes.old}
        </p>
      </div>
    </div>
    
    <div className='col'>
      <div className='p-3 border rounded shadow'>
        {/* New value */}
        <p>
          NEW {changes.category === "Price" ? "PRICE" : "QUANTITY"}: {changes.new}
        </p>
      </div>
    </div>
  </div>
</div>

</div>
  );
};

export default UpdateItem;