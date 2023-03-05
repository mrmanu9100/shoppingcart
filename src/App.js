import logo from './logo.svg';
import './App.css';
import Data from './components/back/Data/Data';
import Header from './components/back/front/Header/Header';
import {BrowserRouter as Router } from 'react-router-dom';
import "tailwindcss/tailwind.css"
import Routers from './components/back/front/Rotes/Routes';
import { useState } from 'react';
import Footer from './components/back/front/Footer/Footer';
function App() {
  const {productItems} = Data
  const [cartItems , SetCartItems] = useState([])
  const [searchProduct, setsearchProduct] = useState("")
  
   const handleSubmit =(product)=>{
    const productExist = cartItems.find((item)=> item.id ===product.id)
    if(productExist){
      SetCartItems(cartItems.map((item)=>item.id === product.id ?
      {...productExist, quantity:productExist.quantity + 1}: item))
    }else {
      SetCartItems([...cartItems, {...product, quantity : 1}])
    }
   }

   const handleRemove =(product)=>{
    console.log(product)
    const productExist = cartItems.find((item)=> item.id ===product.id)
    if(productExist.quantity == 1){
      SetCartItems(cartItems.filter((items)=>items.id!== product.id))
    }else {
      SetCartItems(
        cartItems.map((item)=>item.id === product.id ? {...productExist, quantity:productExist.quantity-1}: item)
      )
    }
   }
   const handleClear =()=>{
    SetCartItems([])
   }
   const handleDelete =(product)=>{
    SetCartItems(cartItems.filter((item)=>item.id !== product.id))
   }

   console.log(searchProduct)
  return (
    <Router>
      <Header searchProduct={searchProduct} setsearchProduct={setsearchProduct}/>
       <Routers products={productItems} cartItems={cartItems} handleSubmit={handleSubmit} handleRemove={handleRemove} handleClear={handleClear} searchProduct={searchProduct} handleDelete={handleDelete}/>
       <Footer/>
    </Router>
  );
}

export default App;
