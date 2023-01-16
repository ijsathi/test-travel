import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide banner" data-bs-ride="carousel">
                <div className="carousel-inner slider ">
                    <div className="carousel-item ">
                        <div className="row p-5  bg-gradient d-flex align-items-center">
                            <div className="col-lg-5 caru-img ">
                                <img style={{ width: "100%", height: "400px" }} src="https://i.ibb.co/H4KgLtr/12-removebg-preview.png" className="d-block " alt="..." />
                            </div>
                            <div className="col-lg-7">
                                <h1 className="animate__bounceInDown"  >Capture the scene on camera</h1>
                                <p className='animate__bounceOut'>Montenegro is a small country that is packed with surprises. Traveling there last year was unexpected as I wanted to look for a country that is outside of the Schengen</p>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item active ">
                        <div className="row p-5  bg-gradient d-flex align-items-center" >
                            <div className="col-lg-7">
                                <h1 className="animate__animated animate__bounce"  >Tour your dream destination with tourve. </h1>
                                <p  >Being one of the world’s most beautiful countries, Croatia welcomes thousands of tourists most especially during the summer season where a lot of people come to enjoy its Mediterranean coastline</p>
                            </div>
                            <div className="col-lg-5">
                                <img src="https://template.hasthemes.com/tourve/tourve/assets/images/slider/hero-1.png" className="d-block w-100 h-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row p-5  bg-gradient d-flex align-items-center">
                            <div className="col-lg-5 caru-img ">
                                <img style={{ width: "120%", height: "395px" }} src="https://i.ibb.co/68hQWkz/asian-couple-beach-1150-6399-removebg-preview.png" className="d-block b-m" alt="..." />
                            </div>
                            <div className="col-lg-7">
                                <h1 className="animate__pulse" >Enjoy your best Moment </h1>
                                <p className='animate__bounceInUp' >One of the most popular places to visit if you’re traveling to Croatia is Hvar Island. Most especially during summer, Hvar Island is crowded with tourists from all over the</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;