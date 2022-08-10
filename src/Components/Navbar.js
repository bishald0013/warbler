import React from 'react'
import './navbar.css'
import Logo from '../Components/Images/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
       <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
          <a class="navbar-brand"><img src={Logo} className='' alt="" /></a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
             </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                 <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                 </li>
                 <li class="nav-item">
                 <Link to='/product' class="nav-link active">Products</Link>
                </li>
                <li class="nav-item">
                <Link to='/aboutus' class="nav-link active">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar