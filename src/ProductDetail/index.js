

import { useParams, Link } from 'react-router-dom';
import React,{ useState, useEffect, useCallback } from 'react';
import './style.css'



const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className='hey'>
   
      <h1> {product.title} </h1>
      <div>
      
        <p>DESCRIPTION: {product.description}</p>
        <p>{product.price} </p>
      </div>

      <Link to="/">
        <button className='back' >Back</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
