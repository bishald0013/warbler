import React from 'react'
import './footer.css'
import Log from '../Images/logo 2.png'
import Loc from '../Images/location.png'
import Soc from '../Images/social.png'

export default function footer() {
  return (
    <footer className='footer bg-custom mt-5' >
       <div className="container-fluid px-4 pt-2">
          <div className="row gx-2 ">

               <div className="col-12 col-md-6 col-lg-4 ps-5 pt-5 pb-5">
                   <div className="footer-about">
                     <div className="footer-logo pt-5">
                     <img src={Log} alt='' className='w-50' />
                    </div>
                   </div>
                </div>

              <div className="col-12 col-md-6 col-lg-4 ps-5 pt-5 pb-5 ">
                   <div className="footer-about">
                     <div className="footer-loc pt-5">
                     <img src={Loc} alt='' className='w-75' />
                     </div>
                   </div>
                </div>

               <div className="col-12 col-md-6 col-lg-4 ps-5 pt-5 pb-5">
                   <div className="footer-about">
                     <div className="footer-soc ps-5">
                        <img src={Soc} alt='' className='' />
                     </div>
                   </div>
                </div>
         </div>
       </div>
     </footer>
  )
}
