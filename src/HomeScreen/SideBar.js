import React, { useState } from "react";
console.log(React.version);
import "./SideBar.css";
import { useDispatch } from "react-redux";
import { productList } from "../store/ProductSlice";
import { Slider } from "@material-ui/core";
const SideBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([100, 1000]);
  const [category, setCategory] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(productList({ type: category, price: value }));
  };
  const selectCategory = (ele) => {
    setCategory(ele);
    dispatch(productList({ type: ele, price: value }));
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div class="sidenav">
      <h3 style={{ color: "white"}}>Price</h3>
      <Slider
        style={{ width: 100, marginLeft: 15 }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={100}
        max={1000}
        step={10}
      />

      <h3 style={{ color: "white" }}>Categories</h3>
      <a
        onClick={() => selectCategory("cloth")}
        href="#cloth"
        style={{ color: "white" }}
      >
        Cloth
      </a>
      <a
        // onClick={() => dispatch(productList({ type: "electronic" }))}
        onClick={() => selectCategory("electronic")}
        href="#electronic"
        style={{ color: "white" }}
      >
        Electronic
      </a>
      <a
        
        onClick={() => selectCategory("Cosmetic")}
        href="#cosmetic"
        style={{ color: "white" }}
      >
        Cosmetics
      </a>
      <a
       
        onClick={() => selectCategory("Shoes")}
        href="#shoes"
        style={{ color: "white" }}
      >
        Shoes
      </a>
    </div>
  );
};
export default SideBar;
