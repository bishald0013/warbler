import React from 'react'
import './items.css'

export default function Items(props) {
  return (
    <div className="row">
      <div className="col">
      <div class="card rounded-4">
        <img src={props.image} className="mx-5 pt-5" alt="..." />
          <div className="card-body text-center">
            <h5 className='card-tittle fw-bold'>{props.tittle}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className='mx-auto mb-3'>
            <img src={props.icon} className='' alt='' />
          </div>
    </div>
      </div>
    </div>
    
  )
}
