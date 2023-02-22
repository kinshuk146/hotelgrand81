
import './Header.css'
import * as React from 'react';



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
                        <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block" >
                            <h3>First slide label</h3>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Second slide label</h3>
                            <p>Some representatdive placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=376&dpr=2.6" class="d-block w-100" alt="..."/>
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
