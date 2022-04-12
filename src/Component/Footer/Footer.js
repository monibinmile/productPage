/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./footer.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.rtl.min.css.map";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
     <div class="card">
  <div class="card-footer bg-success">
         <div className="_phone" >
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