import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import $ from "jquery";
import Popper from "popper.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css'

const NavBar = () => {
  return (
    <div style={{padding:0.5}}>
    <nav class="navbar pb-5 navbar-light bg-success">
    <h1>Product Page</h1>
    </nav> 
    </div>
  );
};
export default NavBar;
