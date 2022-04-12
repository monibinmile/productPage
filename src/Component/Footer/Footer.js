/* eslint-disable jsx-a11y/alt-text */
import React from "react"
console.log(React.version, "moni");
import "./footer.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.rtl.min.css.map";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from 'react-icons/fa';
// import {Phone} from 'feather-icons-react'
const Footer = () => {
  return (
    <div>
     <div class="card">
  <div class="card-header bg-success mt-2">
         
         <div className="_phone" style={{textAlign:"right", color:"white"}}>
          <FaPhone /> 
          <span style={{marginLeft:8}}>
          FOR ANY HELP YOU MAY CALL US AT<br/>1800-267-4444<br />
          (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
          </span>
          </div> 
  
   <div>
 
        </div>
  </div>
  
</div>
    </div>
  )
}

export default Footer