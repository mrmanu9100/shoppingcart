import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Chatbot from '../ChatBot/Chatbot';
import Products from '../Products/Products';
import SignUp from '../SignUp/SignUp';

const Routers = ({products, cartItems, handleSubmit, handleRemove, handleClear, searchProduct,handleDelete}) => {
    return (
    <Routes>
    <Route path='/' element={<Products products={products} cartItems={cartItems} handleSubmit={handleSubmit} searchProduct={searchProduct}/>}/>
    <Route path="sign-up" element={<SignUp/>}/>
    <Route path="cart" element={<Cart cartItems={cartItems} handleSubmit={handleSubmit} handleRemove={handleRemove} handleClear={handleClear} handleDelete={handleDelete}/>}/>
    <Route path="chatbot" element={<Chatbot/>}/>
    </Routes>
    );
}

export default Routers;