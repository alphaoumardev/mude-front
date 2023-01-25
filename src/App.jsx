import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Layout from "./containers/Layout.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Header from "./components/Header.jsx";
import Orders from "./pages/Orders.jsx";
import ProductsAll from "./pages/ProductsAll.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import Customers from "./pages/Customers.jsx";
import Chats from "./pages/Chats.jsx";
import MyAccount from "./pages/MyAccount.jsx";

function App()
{
  return (
    <div className="App">
        <div>
            {/*<AccessibleNavigationAnnouncer />*/}
            <Header/>
            <Routes>
                {/*<Switch>*/}
                <Route  path="/forgot-password" element={<ForgotPassword/>} />
                <Route index path="/login" element={<Login/>}/>
                <Route path="/register" element={<CreateAccount/>}/>

                <Route path="/app" element={<Layout/>}/>
                <Route path="/app/dashboard" element={<Layout/>}/>
                <Route path="/app/orders" element={<Orders/>}/>
                <Route path="/app/products" element={<ProductsAll/>}/>
                <Route path="/app/product/add" element={<AddProduct/>}/>
                <Route path="/app/customers" element={<Customers/>}/>
                <Route path="/app/chats" element={<Chats/>}/>
                <Route path="/app/profile" element={<MyAccount/>}/>
                <Route path="/app/settings" element={<Layout/>}/>
                <Route path="/app/" element={<Layout/>}/>
            </Routes>
        </div>

    </div>
  )
}

export default App
