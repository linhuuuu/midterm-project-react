import React, { useState } from 'react';

const AddItem = ({ addNewItem, items }) => {  //item parameterized from app.js

  //item details arrays
  const [formData, setFormData] = useState({
    itemID: '',
    name: '',
    quantity: '',
    price: '',
    category: ''
  });

  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    //ID VALIDATION
    if (!formData.itemID.trim()) {
      newErrors.itemID = 'ID is required';
    }

    //NAME VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // If there are errors, set them and do not submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Reset errors if the form is submitted successfully
      setErrors({});
      alert('Form submitted successfully!');

      //ADDIN
      addNewItem({
        itemID: formData.itemID.trim(),
        name: formData.name.trim(),
        quantity: formData.itemID.trim(),
        price: formData.name.trim(),
        category: formData.name.trim()
      })
      // Optionally reset form data
      setFormData({
        itemID: '',
        name: '',
        quantity: '',
        price: '',
        category: ''
      });
    }
  };

  //Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='align-left'>
      <h2>Add New Item</h2>
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

        <div>
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Name"
            className='form-control'
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;