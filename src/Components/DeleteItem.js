import React, { useState } from 'react';

const DeleteItem = ({handleDelete, items}) => {  //item parameterized from app.js

//item details arrays
const [formData, setFormData] = useState({
    itemID: ''
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
    
    const found = items.find((item)=> item.itemID === formData.itemID.trim());
       
    if(!found) {
        newErrors.itemID = 'ID does not exist.';
        }

    // If there are errors, set them and do not submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Reset errors if the form is submitted successfully
      setErrors({});
        handleDelete(found);
        alert('ID has been deleted');
      
      // Optionally reset form data
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
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeleteItem;