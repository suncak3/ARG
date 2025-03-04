import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/header";
import Footer from "./components/footer";
import Contacts from "./components/Contacts";
import Catalog from "./pages/CatalogPage";
import DeliveryPage from "./pages/DeliveryPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/delivery" element={<DeliveryPage />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
