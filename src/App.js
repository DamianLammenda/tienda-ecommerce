import React from 'react'
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/cart/Cart';
import CartProvider from './components/cartContext/CartContext';


function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer /> }/>
    <Route path='/category/:type' element={<ItemListContainer /> }/>
    <Route path='/item/:id' element={<ItemDetailContainer /> }/>
    <Route path='/cart' element={<Cart /> }/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
