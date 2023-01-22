import './App.css'
import {Route, Routes} from "react-router-dom";
import React, { lazy } from "react";
import {
    BrowserRouter as Router,
    // Switch,
    // Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Layout from "./containers/Layout.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Header from "./components/Header.jsx";
import Orders from "./pages/Orders.jsx";
import ProductsAll from "./pages/ProductsAll.jsx";
import AddProduct from "./pages/AddProduct.jsx";

// const Layout = lazy(() => import("./containers/Layout"));
// const Login = lazy(() => import("./pages/Login"));
// const CreateAccount = lazy(() => import("./pages/CreateAccount"));
// const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

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
                <Route path="/app/customer" element={<Layout/>}/>
                <Route path="/app/chat" element={<Layout/>}/>
                <Route path="/app/profile" element={<Layout/>}/>
                <Route path="/app/settings" element={<Layout/>}/>
                <Route path="/app/" element={<Layout/>}/>
            </Routes>
        </div>

    </div>
  )
}

export default App
