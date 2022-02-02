import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, Druhy, Poddruhy, Subtype, Error } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/druhy" element={<Druhy />} />
                    <Route exact path="/poddruhy" element={<Poddruhy />} />
                    <Route path="/poddruhy/:id" element={<Subtype />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
