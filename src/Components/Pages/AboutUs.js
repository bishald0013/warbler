import React from 'react'
import './aboutus.css'
import Footer from './Footer.js';
import Cup from '../Images/cup.png'


function AboutUs() {
  return (
  <div className='container'>
    <div class="row mt-5">
      <div class="col-sm-6">
          <div class="card bg-transparent border-0">
            <div class="card-body">
              <h5 class="card-title fs-1 fw-bold">About Us</h5>
              <p class="card-text fs-4 pt-5 fw-light">Some centennial enterprises have pages of content that can fit in this section, 
              while startups can tell the story of how the company was born, its challenges,
              and its vision for the future.</p>
            </div>
              <img src={Cup} alt='' className='card-img-bottom mt-4 ps-2 w-75' />
          </div>
        </div>
      <div class="col-sm-6">
        <div class="card bg-transparent border-0">
          <div class="card-body">
            <h1>Love to hear from you,
            Get in touch</h1>
          <form>
            <div class="mb-5">
              <label for="exampleInputEmail1" class="form-label">Your Name</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Your Email</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="form-floating pt-5">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea" class="form-label">Message</label>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
<div className='footer'>
      <Footer />
    </div>
  </div>
  )
}

export default AboutUs