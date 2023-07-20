import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from './Login';
import Products from './Products';
import ProductDetail from './ProductDetail';

import AddProduct from './AddProduct';
function App() {
  return (
    <div >
     
     
     <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/newproduct" element={<AddProduct />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
