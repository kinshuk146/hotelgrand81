import React from 'react'


function Header() {
    return (
        <div style={{margin:'-6rem 0rem'}}>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/new-images/Luxury%20Grande%20Sea%20View%20Room%20-%20Bedroom.jpg" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/header2.png" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/header3.png" class="d-block w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
