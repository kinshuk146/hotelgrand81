import './Header.css'
import * as React from 'react';
import Form from '../Form/Form'


function Header(props) {
    return (
        <>
        <div className="header contain">
            <div id="carouselExampleCaptions carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" pause="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/final_Background.jpg" class="d-block w-100 image" alt="..." style={{objectFit:'fill'}}/>
                    </div>
                </div>
            </div>
            <div class="heading overlay container " >
                <div className="mobileResponsiveHeading"style={{marginTop:'-24rem',fontSize:'90px',color:'white',marginLeft:'1rem'}}>
                    {props.heading}
                </div>
            </div>
            <div class="heading overlay container" >
                <p className="mobileResponsiveParagraph"style={{marginTop:'-19rem',fontSize:'30px',color:'white',marginLeft:'1rem'}}>
                    {props.description}
                </p>

            </div>
            
            <div class="overlay container" >
                <div className="formResponsive" style={{marginTop:'-10rem'}}>
                    <Form/>
                </div>
            </div>
        </div>
            </>
    )
}

export default Header
