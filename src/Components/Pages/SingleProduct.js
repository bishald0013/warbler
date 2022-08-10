import React from 'react'
import "./singleproduct.css"
import {FaRupeeSign} from 'react-icons/fa';


function SingleProduct({prod}) {
  return (
  <div className="container my-5">
    <div className="card-group">
    <div class="card">
    <img src={prod.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{prod.tittle}</h5>
      <p class="card-text">{prod.description}</p>
      <p class="card-text"><FaRupeeSign/>{prod.price}</p>
      <button type="button" class="btn btn-colour btn-lg">Buy Now</button>
    </div>
  </div>
    </div>
  </div>
  )
}

export default SingleProduct