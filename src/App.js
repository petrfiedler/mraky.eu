import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Home, Druhy, Poddruhy, Error } from "./pages";
function App() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/druhy" element={<Druhy />} />
                <Route exact path="/poddruhy" element={<Poddruhy />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
