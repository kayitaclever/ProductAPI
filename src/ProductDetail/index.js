

import { useParams, Link } from 'react-router-dom';
import React,{ useState, useEffect, useCallback } from 'react';


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
    <>
   
      <h1> {product.title} </h1>
      <div>
      
        <p>DESCRIPTION: {product.description}</p>
        <p>{product.price} </p>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default ProductDetail;
