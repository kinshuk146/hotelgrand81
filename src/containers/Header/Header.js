
import './Header.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function Header() {
    return (
        <>
        <div className="header">
            <div id="carouselExampleCaptions carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" pause="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/homeBackground.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block" >
                            <h3>First slide label</h3>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/homeBackground2.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Second slide label</h3>
                            <p>Some representatdive placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/header3.png" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Third slide label</h3>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
            </>
    )
}

export default Header
