import React from "react"
import data from "./ProductData"
import Product from "./Product"
const ProductPage =()=>{
    return(
        <div>
        <h1 className="text-center mt-2 "> Fashion Product</h1>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {
              data.map((product) => {
                return (
                    <Product key={product.id} product={product}/>
                ) 
                
              })
            }
          </div>
        </section>
      </div>
       
    )

}
export default ProductPage