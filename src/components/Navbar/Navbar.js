import React from 'react'
import './Navbar.css'
import  { useState, useEffect } from "react"


function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [showNavbar,setshowNavbar]=useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const hideNavbar = () => {
    console.log(window.scrollY)
    if (window.scrollY < 20) {
      setshowNavbar(true)
    } else {
      setshowNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  useEffect(() => {
    hideNavbar()
    // adding the event when scroll change background
    window.addEventListener("scroll", hideNavbar)
  })

  return (
    <nav className={`navbar ${navbar ? "bg-black" : ""} navbar-expand-lg fixed-top`}>
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#" style={{color:'white'}}><h3>Hotel Grand 81</h3></a>
    <div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:'white'}}>Rooms</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" style={{color:'white'}}>Disabled</a>
        </li>
      </ul>
      </div>
    </div>
    <button type="button" class="btn border border-white rounded-0"><div style={{color:'white'}}>BOOK NOW</div></button>
  </div>
</nav>
  )
}

export default Navbar;
