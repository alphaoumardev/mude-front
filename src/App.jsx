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
import MyProfile from "./profile/MyProfile.jsx";

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
                <Route index path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                <Route path="/mude/quick" element={<QuickView/>}/>

                <Route path="/" element={<Mude/>}/>
                <Route path="/mude/guowuchang" element={<Mart/>}/>
                    <Route path="/mude/guowuchang/:category" element={<Mart/>}/>

                <Route path="/mude/single/product/:id" element={<SingleProduct/>}/>
                <Route path="/mude/cart" element={<MudeCart/>}/>
                <Route path="/mude/checkout" element={<CheckOut/>}/>
                <Route path="/mude/order/detail" element={<OrderDetail/>}/>
                <Route path="/mude/order/history" element={<OrderHistory/>}/>

                <Route path="/mude/myprofile" element={<MyProfile/>} />

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
