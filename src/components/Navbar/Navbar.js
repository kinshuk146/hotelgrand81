import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-bg sticky-top ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'white'}}><h3>Hotel Grand 81</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
    <button type="button" class="btn btn-light rounded-0"><div className="Book">BOOK NOW</div></button>
  </div>
</nav>
  )
}

export default Navbar;
