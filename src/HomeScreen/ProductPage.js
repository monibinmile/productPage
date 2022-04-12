import React from "react"
import data from "./ProductData"
import Product from "./Product"
import { useSelector } from "react-redux"
const ProductPage =()=>{
  const productData = useSelector((state) => state.counter.AllProducts)
    return(
        <div>
        <h1 className="text-center mt-2 "> Fashion Product</h1>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {
              productData.map((product) => {
                  console.log(data)
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