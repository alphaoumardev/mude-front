import './App.css'
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import {Route, Routes} from "react-router-dom";
import Mude from "./pages/Mude";
import Shop from "./pages/Shop";
import Header from "./header/Header.jsx";
import {Footer} from "./components/Footer.jsx";

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

        </Routes>
        {window.location.pathname==="/login" ||
        window.location.pathname==="/register"? "": <Footer/>}

    </div>
  )
}

export default App
