import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import $ from "jquery";
import Popper from "popper.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css'
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom'
const NavBar = () => {
    const[sidebar, setSideBar]= useState(false)
    const showSideBar = () => {
        return setSideBar(!sidebar)
    }
  return (
 <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="container ml-30" >
        {/* <FaBars style={{placeItem:"Left"}} onClick={showSideBar}/> */}
        <h3 className="_productPage" style={{ color:"white", textAlign:"center"}}>ProductPage</h3>
      </div>
    </nav>
    <div class="sidenav">
    {/* <FaBars  onClick={showSideBar}/> */}
    <a href="#about">Product</a>
    <a href="#services">Price</a>
    </div>
  </div>
    
   
  );
};
export default NavBar;
