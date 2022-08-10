import React from 'react'
import './fontpage.css'
import Tea from "./Images/tea.png"
import Button from '../Components/Images/button.png'
import {Link} from "react-router-dom"


function FontPage() {

  return (
  //   <section className='font'>
  //   <div className=' Info'>
  //     <div className='row'> 
  //       <div className='col col-sm-6 mt-5'>
  //           <h1 className='fw-bold text-start'>Explore the amazing<br>
  //           </br> tea from Assam</h1>
  //           <p className='text-start ml-5 pt-3'>Fresh and quality tea. A cup of tea can
  //              solve any problem or bring anyone together</p>
  //              <div className='col d-flex justify-content-start'>
  //                 <img onClick={()=> navigate('/product')} src={Button} className='mt-4' />
  //              </div>
  //       </div>
  //       <div className='col '>
  //             {/* <h1>Helloadjiajwd</h1> */}
  //           <img src={Tea} alt='' className='image-fluid'/>
  //       </div>
  //     </div>
  //   </div>
  // </section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-col">
        <h1 className='fw-bold text-start mt-5 pt-5'>Explore the amazing<br>
           </br> tea from Assam</h1>
           <p className='text-start fs-4 ml-5 pt-3'>Fresh and quality tea. A cup of tea can
           solve any problem or bring anyone together</p>
               <div className='col d-flex justify-content-start'>
                <Link to="product"><img  src={Button} className='mt-4' /></Link>
                 
             </div>
        </div>
        <div className="col-lg-6">
        <img src={Tea} alt='' className='image-fluid'/>
        </div>
      </div>
    </div>
  )
}

export default FontPage