import React, { useState } from 'react';
import updateProduct from './UpdateProduct.jsx'

const EditProductForm = ({ productId }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateProduct(productId, productData, images);
      console.log('Product updated successfully:', result);
    } catch (error) {
      console.error('Failed to update product:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <textarea
        name="description"
        value={productData.description}
        onChange={handleChange}
        placeholder="Product Description"
        required
      />
      <input
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        placeholder="Price"
        step="0.01"
        required
      />
      <input
        type="text"
        name="category"
        value={productData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="stock"
        value={productData.stock}
        onChange={handleChange}
        placeholder="Stock Quantity"
        required
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProductForm;
