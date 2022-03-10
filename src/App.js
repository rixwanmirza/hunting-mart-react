import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link, Switch,
} from "react-router-dom";
import React from "react";
import './App.css';
import Header from "./Components/layout/Header";
import Hunting from "./Pages/Hunting";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./Pages/ProductDetail";


function App() {
  return (
    <div className="App">
        <div id="wrapper">
            <Router>
                <Header />
                <main id="main">
                    <Routes>
                        <Route  path="/"  element={<Home />} />
                        <Route  path="/Hunting" element={<Hunting />} />
                        <Route  path="/Shooting" element={<Hunting />} />
                        <Route  path="/Clothing" element={<Hunting />} />
                        <Route  path="/Footwear" element={<Hunting />} />
                        <Route  path="/Contactus" element={<ContactUs />} />
                        <Route  path="/Products/:id" element={<ProductDetail  />} />
                    </Routes>
                </main>
            </Router>
        </div>
    </div>
  );
}

export default App;
