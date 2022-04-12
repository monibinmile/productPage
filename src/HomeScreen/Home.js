import React from "react";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar/NavBar";
import ProductPage from "./ProductPage";
import SideBar from "./SideBar";
const Home =() => {
   return(
       <div>
       <NavBar />
      <SideBar />
       <ProductPage />
       <Footer />
       </div>
   )
    
    
}
export default Home