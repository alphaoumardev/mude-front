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

                    {/* Place new routes over this */}
                    <Route path="/app" element={<Layout/>} />
                    {/*<Route path="/app/dashboard" element={<Dashboard/>} />*/}
                    {/* If you have an index page, you can remothis Redirect */}
                    {/*<Redirect exact from="/" to="/login" />*/}
                {/*</Switch>*/}
                {/*<Route path="/"*/}
                <Route index path="/login" element={<Login/>}/>
                <Route path="/register" element={<CreateAccount/>}/>

            </Routes>
        </div>

    </div>
  )
}

export default App
