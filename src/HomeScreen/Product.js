import React from "react"
const Product =({product})=>{
    return(
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img style={{backgroundSize:"cover", height:300}} src={product.img} alt={"img"}/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h5 className="card-title">{product.desc}</h5>
            <p className="card-text"style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} >MRP {product.price} Rs</p>
            <p className="card-text" >{product.newprice} Rs</p>
          </div>
        </div>
        </div>
    )
}
export default Product