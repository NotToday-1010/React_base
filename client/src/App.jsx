import React from "react";
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;