import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
    Home,
    Druhy,
    Poddruhy,
    Subtype,
    SubtypeCloud,
    Error,
    Type,
} from "./pages";
function App() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/druhy" element={<Druhy />} />
                <Route path="/druhy/:id" element={<Type />} />
                <Route exact path="/poddruhy" element={<Poddruhy />} />
                <Route path="/poddruhy/:id" element={<Subtype />} />
                <Route
                    path="/poddruhy/:subtype/:id"
                    element={<SubtypeCloud />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
