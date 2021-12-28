import React from 'react'

function Carousel() {
    return (
        <>


            {/* <div id="carouselImg" class="carousel slide mt-20" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselimg" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="0"></button>
                    <button type="button" data-bs-target="#carouselimg" data-bs-slide-to="1" aria-label="1"></button>
                    <button type="button" data-bs-target="#carouselimg" data-bs-slide-to="2" aria-label="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="http://placehold.it/300x300?name=lol" class="d-block w-100 " />
                    </div>
                    <div class="carousel-item">
                        <img src="http://placehold.it/300x300?name=back" class="d-block w-100 " />
                    </div>
                    <div class="carousel-item">
                        <img src="http://placehold.it/300x300?name=front" class="d-block w-100 " />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselimg" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselimg" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="http://placehold.it/300x300?name=lol" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="http://placehold.it/300x300?name=lol" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="http://placehold.it/300x300?name=lol" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>










        </>
    )
}

export default Carousel
