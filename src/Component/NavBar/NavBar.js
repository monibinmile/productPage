import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import $ from "jquery";
import Popper from "popper.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './NavBar.scss'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="container-fluid">
        <h3 className="_productPage" style={{ color:"white"}}>ProductPage</h3>
      </div>
    </nav>
  );
};
export default NavBar;
