// src/components/ProductUploadForm.jsx
import { useState } from 'react';
import axios from 'axios';

function ProductUploadForm() {
  const [product, setProduct] = useState({ name: '', description: '', price: '', category: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://farm-connect-api.onrender.com/products', product);
      alert('Product added successfully!');
      setProduct({ name: '', description: '', price: '', category: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} placeholder="Product Name" onChange={handleChange} />
      <textarea name="description" value={product.description} placeholder="Product Description" onChange={handleChange} />
      <input type="number" name="price" value={product.price} placeholder="Price" onChange={handleChange} />
      <input type="text" name="category" value={product.category} placeholder="Category" onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductUploadForm;
