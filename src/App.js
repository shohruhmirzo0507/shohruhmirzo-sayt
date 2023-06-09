
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './router/home/Home';
import Cart from './router/cart/Cart';
import Login from './router/login/Login';
import Wishlist from './router/wishlist/Wishlist';
import SingleRoute from './router/single-route/SingleRoute';
import Admin from './router/admin/Admin';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/product/:id' element={<SingleRoute/>}/>

        
      </Routes>
      <br />
      <Footer/>
    </div>
  );
}

export default App;
