import React, { useState } from 'react';

const AddItem = ({ handleAddItem, items }) => {  //item parameterized from app.js

  //Form Data Array
  const [formData, setFormData] = useState({
    itemID: '',
    name: '',
    quantity: '',
    price: '',
    category: ''
  });

  const [errors, setErrors] = useState({}); //array error states
  const [text, setText] = useState("");

  // FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}; //error list

    // VALIDATIONS - trims input, IF empty, newErrors={"error"}.
    // ID VALIDATION
    if (!formData.itemID.trim()) {
      newErrors.itemID = 'ID is required';
      // ID Duplicate
    } else if (items.some(item => item.itemID === formData.itemID.trim())) {
      newErrors.itemID = 'ID is already taken. Please choose another.';
    }

    // NAME VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // NUMERIC VALIDATIONS - Additionally checks if value is a whole number.
    // QUANTITY VALIDATION 
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
      newErrors.quantity = 'Please enter an appropriate price number';
    }

    // PRICE VALIDATION (should be numeric and positive)
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = 'Please enter an appropriate quantity number';
    }

    // CATEGORY VALIDATION
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }

    // ERROR HANDLING
    if (Object.keys(newErrors).length > 0) {  //IF Error Array has a single instance of error.
      setErrors(newErrors); //Pass const value to use state.
    } else {
      setErrors({});// Reset Errors if Success.

      // ADD ITEM EVENT 
      handleAddItem({
        itemID: formData.itemID.trim(),
        name: formData.name.trim(),
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        category: formData.category.trim()
      });
      // Set Submit Success Mssg
      setText("Item " + formData.itemID.trim() + " (" + formData.name.trim() + ") successfully added!");
      // RESET FORM DATA
      setFormData({
        itemID: '',
        name: '',
        quantity: '',
        price: '',
        category: ''
      });
    }
  };

  // INPUT CHANGE HANDLE-  takes event name that correspond to the formData object and sets its value to event value.
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
          {errors.itemID && <p style={{ color: 'red' }}>{errors.itemID}</p>}  {/*Prints Out Error  */}
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

        <div>
          <div>
            <label htmlFor="quantity">QUANTITY:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Enter Quantity"
              className='form-control'
            />
          </div>
          {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity}</p>}
        </div>

        <div>
          <label htmlFor="price">PRICE:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Price"
            className='form-control'
          />
          {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="category">CATEGORY:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
        </div>

        <button className='btn btn-primary' type="submit">Add Item</button>
        {Object.keys(errors).length === 0 && <p>{text}</p>} {/*SUCCESS MESSAGE FIELD*/}
      </form>
    </div>
  );
};

export default AddItem;
