import React from 'react'
import './Navbar.css'
import { useState, useEffect } from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import DehazeIcon from '@mui/icons-material/Dehaze';


function Navbar(props) {
  const [navbar, setNavbar] = useState(false)
  const [showNavHover, setshowNavHover] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const onHover = () => {
      setshowNavHover(true);
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  useEffect(() => {
    onHover()
    // adding the event when scroll change background
    window.addEventListener("mouseover", onHover)
  })

  return (
      
      <nav className={`navbar ${navbar ? "navbar-custom" : "navbar-hover"} d-flex justify-content-between navbar-expand-lg fixed-top`}>
        
        <div className='d-flex flex-row'>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <DehazeIcon fontSize='large' style={{ color: 'white' }}/>
          </button>
         
          <div class="offcanvas offcanvas-start  text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hotel Grand 81</h5>
              <button type="button" class="btn-close btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" href="/" style={{ color: 'white' }}>HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="rooms" style={{ color: 'white' }}>ROOMS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.grandfiesta81.com/" style={{ color: 'white' }}>DINING</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="gallery" style={{ color: 'white' }}>GALLERY</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='contact' style={{ color: 'white' }}>CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="d-flex flex-row" style={{ marginRight:'0.25rem',marginLeft:'-1rem'}}>
          <CallIcon fontSize="large" style={{color:'white',marginRight:'0.5rem'}}/>
          <EmailIcon fontSize="large" style={{color:'white',marginRight:'1rem'}}/>
          <button type="button" class="btn border border-white rounded-0 customButton"><div style={{ color: 'white'}}><a>BOOK NOW</a></div></button>
          
          
        </div>
      </nav>
  )
}

export default Navbar;
