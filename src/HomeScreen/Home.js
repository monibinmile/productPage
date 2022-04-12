import React from "react";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar/NavBar";
import ProductPage from "./ProductPage";
import SideBar from "./SideBar";
import './SideBar.css'
const Home =() => {

   return(
       <div>
       <NavBar />
       <SideBar/>
       <ProductPage />
       <Footer />
       <ProductPage />
       
       
       </div>
   )
    
    
}
export default Home