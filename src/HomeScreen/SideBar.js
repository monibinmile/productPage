import React from "react";
import "./SideBar.css";
import {  useDispatch } from "react-redux";
import { productList } from "../store/ProductSlice";
const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div class="sidenav">
      <h3 style={{color:'white'}}>Categories</h3>
      <a onClick={() => dispatch(productList({type:"cloth"}))} href="#cloth" style={{color:'white'}}>Cloth</a>
      <a onClick={() => dispatch(productList({type:"electronic"}))}href="#electronic" style={{color:'white'}}>Electronic</a>
      <a onClick={() => dispatch(productList({type:"Cosmetic"}))} href="#cosmetic" style={{color:'white'}}>Cosmetics</a>
      <a onClick={() => dispatch(productList({type:"Shoes"}))}href="#shoes" style={{color:'white'}}>Shoes</a>
    </div>
  );
};
export default SideBar;
