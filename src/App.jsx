import './App.css'
import Login from "./authentication/Login.jsx";
import Register from "./authentication/Register.jsx";
import {Route, Routes} from "react-router-dom";
import Mude from "./pages/Mude";
import Mart from "./mude/Mart.jsx";
import Header from "./header/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import SingleProduct from "./single-product/SingleProduct.jsx";
import MudeCart from "./ShoppingCart/MudeCart.jsx";
import CheckOut from "./orders/CheckOut.jsx";
import OrderDetail from "./orders/OrderDetail.jsx";
import OrderHistory from "./orders/OrderHistory.jsx";
import Dashbord from "./admin/Dashbord";
import NotFound from "./components/NotFound.jsx";
import QuickView from "./mude/QuickView.jsx";

function App() {

  return (
    <div className="App">
        <div>
            <Routes>
                <Route path="/admin/" element={<Dashbord/>}/>
            </Routes>

        </div>
        <div>
            {window.location.pathname==="/login" ||
            window.location.pathname==="/register" ||
            window.location.pathname==="/admin"? "": <Header/>}

            <Routes>
                {/*<Route path="/"*/}
                <Route exact index path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>

                <Route exact path="/mude/quick" element={<QuickView/>}/>

                <Route exact path="/" element={<Mude/>}/>
                <Route exact path="/mude/guowuchang" element={<Mart/>}/>
                <Route exact path="/mude/single/product/:id" element={<SingleProduct/>}/>
                <Route exact path="/mude/cart" element={<MudeCart/>}/>
                <Route exact path="/mude/checkout" element={<CheckOut/>}/>
                <Route exact path="/mude/order/detail" element={<OrderDetail/>}/>
                <Route exact path="/mude/order/history" element={<OrderHistory/>}/>

                <Route path="*" element={<NotFound/>} />
            </Routes>
            {window.location.pathname==="/login" ||
            window.location.pathname==="/register" ||
            window.location.pathname==="/admin"? "": <Footer/>}
        </div>

    </div>
  )
}

export default App
