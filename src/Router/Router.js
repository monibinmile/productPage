import React from "react";
// import { Routes, Route } from "react-router-dom"
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar/NavBar";
// import Home from "../HomeScreen/Home";
import ProductPage from "../HomeScreen/ProductPage";
import SideBar from "../HomeScreen/SideBar";
import "../HomeScreen/SideBar.css"
const Router = () => {
    return (
    <div> 
    <NavBar/>
    {/* <div class="sidebar"> */}
      <SideBar />
      <ProductPage />
    {/* </div> */}
    <Footer />
    </div>
      
    )

}
export default Router