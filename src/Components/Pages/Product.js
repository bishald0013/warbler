import React from 'react'
import { TeaState } from '../../Context/Context'
import SingleProduct from './SingleProduct'

function Product() {

  const {state: {productList}} = TeaState()

  return (
    <div className="container">
        <h1 className='text-center fw-bold pb-4 fs-1 mt-5'>Our Products</h1>
    <div className="row">
      <div className="col d-flex">

        {productList.map((prod) => {
          return (
            <SingleProduct prod={prod} key={prod.id}/> 
          )
        })}
       
      </div>
    </div>
  </div>
  )
}

export default Product