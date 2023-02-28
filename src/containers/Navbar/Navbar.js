import React from 'react'
import './Navbar.css'
import { useState, useEffect } from "react";

function Navbar() {
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
    
      <nav className={`navbar ${navbar ? "bg-dark" : ""}  navbar-expand-lg fixed-top`}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/" style={{ color: 'white' }}><h3>Hotel Grand 81</h3></a>
          <div class="offcanvas offcanvas-start  text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hotel Grand 81</h5>
              <button type="button" class="btn-close btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="rooms" style={{ color: 'white' }}>Rooms</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: 'white' }}>Dining</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="gallery" style={{ color: 'white' }}>Gallery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='contact' style={{ color: 'white' }}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <button type="button" class="btn border border-white rounded-0 customButton"><div style={{ color: 'white' }}><a>BOOK NOW</a></div></button>
        </div>
      </nav>
  )
}

export default Navbar;
