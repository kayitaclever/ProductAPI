import {Link} from 'react-router-dom'
import {useState} from 'react'
import './style.css'





const AddProduct =()=> {

  const [newProduct, setNewProduct] = useState({
      id: "",
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
  })

   const {id, title, description, price, discountPercentage, rating, stock, brand, category} = newProduct;
  
  console.log(id, title, description, price, discountPercentage, rating, stock, brand, category)

 const handleChange =(e)=> {
   setNewProduct({
     ...newProduct,
     [e.target.name]: [e.target.value]
   })
   
 }

  const handleSubmit = async()=> {
    const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, title, description, price, discountPercentage, rating, stock, brand, category
  })
    })
   const result = await response.json()
    console.log(result)
  }
  
  return (
      
    <div className='add'>
        <h1>ADD NEW PRODUCT</h1>
      <input name='id' value={newProduct.id} type='text' placeholder="Enter product id" onChange={handleChange} />
      <input name='title' value={newProduct.title} type='text' placeholder="Enter product title" onChange={handleChange} />
      
      
      <input name='description' value={newProduct.description} type='text' placeholder="Enter product description" onChange={handleChange} />
  
      <input name='price' value={newProduct.price} type='text' placeholder="Enter product price" onChange={handleChange} />
      
      <input name='discountPercentage' value={newProduct.discountPercentage} type='text' placeholder="Enter product discount" onChange={handleChange} />
      <input name='rating' value={newProduct.rating}  type='text' placeholder="Enter product rating" onChange={handleChange} />
     
      <input name='stock' value= {newProduct.stock} type='text' placeholder="Enter product stock" onChange={handleChange} />
      <input name='brand' value={newProduct.brand}  type='text' placeholder="Enter product brand" onChange={handleChange} />
     
     
    
<br/>
<br/>
       <button onClick={handleSubmit}>
         ADD PRODUCT
        </button>
      
      <Link to='/products'>
        <button>
          PRODUCTS
        </button>
      </Link>

    </div>
    )
}
  

export default AddProduct;