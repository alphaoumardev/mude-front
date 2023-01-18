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
import NotFound from "./components/NotFound.jsx";
import QuickView from "./mude/QuickView.jsx";
import MyProfile from "./profile/MyProfile.jsx";
import Contact from "./components/Contact.jsx";
import MyPurchases from "./profile/MyPurchases.jsx";
import MyCart from "./profile/MyCart.jsx";
import MyShippingAddress from "./profile/MyShippingAddress.jsx";
import MyWishlist from "./profile/MyWishlist.jsx";
import Dashbord from "./admin/Dashbord.jsx";

function App()
{
  return (
    <div className="App">
        <div>
            <Routes>
                <Route path="/mude/guanliyuan" element={<Dashbord/>}/>
            </Routes>
        </div>
        <div>
            {window.location.pathname==="/login" ||
            window.location.pathname==="/register"?"" : <Header/>}

            <Routes>
                {/*<Route path="/"*/}
                <Route index path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/mude/contact" element={<Contact/>}/>

                <Route path="/mude/quick" element={<QuickView/>}/>

                <Route path="/" element={<Mude/>}/>
                <Route path="/mude/guowuchang" element={<Mart/>}/>
                    <Route path="/mude/guowuchang/:category" element={<Mart/>}/>

                <Route path="/mude/single/product/:id" element={<SingleProduct/>}/>
                <Route path="/mude/cart" element={<MudeCart/>}/>
                <Route path="/mude/checkout" element={<CheckOut/>}/>
                <Route path="/mude/order/detail" element={<OrderDetail/>}/>
                <Route path="/mude/order/history" element={<OrderHistory/>}/>

                {/*<Route path="/mude/guanliyuan" element={<Dashbord/>}/>*/}

                {/*My*/}
                <Route path="/mude/myprofile" element={<MyProfile/>} />
                <Route path="/mude/mypurchases" element={<MyPurchases/>} />
                <Route path="/mude/mycart" element={<MyCart/>} />
                <Route path="/mude/myshippingaddress" element={<MyShippingAddress/>} />
                <Route path="/mude/wishlist" element={<MyWishlist/>} />

                <Route path="*" element={<NotFound/>} />
            </Routes>
            {window.location.pathname==="/login" ||
            window.location.pathname==="/register" ? "": <Footer/>}
        </div>

    </div>
  )
}

export default App
