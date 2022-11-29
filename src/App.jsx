import './App.css'
import Login from "./authentication/Login.jsx";
import Register from "./authentication/Register.jsx";
import {Route, Routes} from "react-router-dom";
import Mude from "./pages/Mude";
import Shop from "./mude/Shop.jsx";
import Header from "./header/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import SingleProduct from "./single-product/SingleProduct.jsx";
import MudeCart from "./ShoppingCart/MudeCart.jsx";
import CheckOut from "./checkouts/CheckOut";
import OrderDetail from "./orders/OrderDetail.jsx";
import OrderHistory from "./orders/OrderHistory.jsx";

function App() {

  return (
    <div className="App">
        {window.location.pathname==="/login" ||
        window.location.pathname==="/register"? "": <Header/>}

        <Routes>
            {/*<Route path="/"*/}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route exact path="/" element={<Mude/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/single/product/:id" element={<SingleProduct/>}/>
            <Route path="/mude/cart" element={<MudeCart/>}/>
            <Route path="/mude/checkout" element={<CheckOut/>}/>
            <Route path="/mude/order/detail" element={<OrderDetail/>}/>
            <Route path="/mude/order/history" element={<OrderHistory/>}/>






        </Routes>
        {window.location.pathname==="/login" ||
        window.location.pathname==="/register"? "": <Footer/>}

    </div>
  )
}

export default App
