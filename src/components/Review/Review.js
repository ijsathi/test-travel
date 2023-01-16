import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <>
        <div data-aos="zoom-in" id='blog' style={{marginTop:"150px"}} className="r ">
            <div className="">
            <h1 className='imp'>𝐼𝓂𝓅𝓇𝑒𝓈𝓈𝒾𝑜𝓃𝓈</h1>
            <h1 style={{paddingTop:"50px", textAlign:"center"}}>
            Thank you for the reviews we are proud of
            </h1>
            <span className="d"></span>
            <div className="review">
                <div className="review-part">
                    <div className="img1">
                        <img src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/testimonials-img-2-100x100.png" alt="" />
                    </div>
                    <div className="text1 w-100">
                        <h3>
                            PARIS IN AWESOME
                        </h3>
                        <p>
                        Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century
                        </p>
                        <h6 className='fw-bold'>
                            Daniel Ferguson
                        </h6>
                        <p style={{ color: "orange" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
                    </div>
                </div>
                <div className="review-part">
                    <div className="img1">
                        <img src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/03/team-img-4-100x100.png" alt="" />
                    </div>
                    <div className="text1 w-100">
                        <h3>
                            BALI WAS MY DREAM
                        </h3>
                        <p>
                        Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan.
                        </p>
                        <h6 className='fw-bold'>
                            Evelyn Jenkins
                        </h6>
                        <p style={{ color: "orange" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                    </div>
                </div>
                <div className="review-part">
                    <div className="img1">
                        <img src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/testimonials-img-1-100x100.png" alt="" />
                    </div>
                    <div className="text1 w-100">
                        <h3>
                            THAILAND PARADISE
                        </h3>
                        <p>
                        Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. It's known for tropical beaches, ancient ruins and ornate temples displaying figures of Buddha. 
                        </p>
                        <h6 className='fw-bold'>
                            Melisa Thomas
                        </h6>
                        <p style={{ color: "orange" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
            
        </>
    );
};

export default Review;