import { Route, Routes } from 'react-router-dom';

import './App.css'
import AllProducts from './components/AllProducts';
import Search from './components/Search';
import CarrinhoCompras from './components/CarrinhoCompras';
import ProductDetails from './components/ProductsDetails';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Login from './components/Login';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/carrinho" element={<CarrinhoCompras/>} />
        <Route path="/allProducts" element={<AllProducts/>} />
        <Route path="/productDetails" element={<ProductDetails/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
