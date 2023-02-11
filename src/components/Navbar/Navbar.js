import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <nav class="navbar sticky-top bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand inline" href="#">
        <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/new-images/Luxury%20Grande%20Sea%20View%20Room%20-%20Bedroom.jpg"  width="30" height="24" class="d-inline-block align-text-top"/>
        Hotel Grand 81
        </a>
          <a class="navbar-brand" href="#">Sticky top</a>
        </div>
      </nav>
    )
}

export default Navbar
