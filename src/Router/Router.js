import React from "react";
import { Routes, Route } from "react-router-dom"
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar/NavBar";
import Home from "../HomeScreen/Home";
import SideBar from "../HomeScreen/SideBar";
const Router = () => {
    return (
    <div> 
    <NavBar/>
    <SideBar />
    <Footer />
    </div>
      
    )

}
export default Router