import React, { useState } from 'react';

const DeleteItem = ({ handleDelete, items }) => {  //item parameterized from app.js
  const [formData, setFormData] = useState({itemID: ''});  //Form Data
  const [text, setText] = useState("");   //Text
  const [errors, setErrors] = useState({});   //Errors

// FORM HANDLING
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

//ID VALIDATION
    if (!formData.itemID.trim()) {
      newErrors.itemID = 'ID is required';
    }
  //IF ID FOUND - pass to an array
    const found = items.find((item) => item.itemID === formData.itemID.trim());

  //ID NOT FOUND
    if (!found) {
      newErrors.itemID = 'ID does not exist.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      handleDelete(found);  //Pass found value
      setText("Item " + formData.itemID + " has been removed from the inventory.")

    // RESET FORM DATA
      setFormData({
        itemID: ''
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
      <h2>Remove Item</h2>
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
        {!errors.itemID && <p>{text}</p>}
         <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeleteItem;