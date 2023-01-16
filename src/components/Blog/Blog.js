import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <div className="blog">
                <img src="https://i.ibb.co/k62m7tL/300-3002152-trendy-coconut-coconut-water-hd-png-download-removebg-preview.png" alt="" />
            </div>
            <Container  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <Row>
                    <Col>
                        <h1>FEEL THE VIBE</h1>
                        <span className="mar"></span>
                        <p>Traveling on a cargo ship is very much possible, and while it isn't considered a luxury cruise, it is still a great way to travel — even at a cost of roughly $100 USD daily, it is worth the time to find a spot on a ship. ... Yes, you can still travel to many locations in the world by boat.</p>
                        <span className="more"><a style={{ textDecoration: "none", color: "black" }} href="https://youtu.be/Hfoi76YbnzA"> Read More...</a></span>
                    </Col>
                    <Col>
                        <div className="blog-video">
                            <h4>OUR VIDEO GALLERY</h4>
                            <div className="blog-row">
                                <div className="blog-col">
                                    <div className="feature-img">
                                        <img src="https://media.istockphoto.com/photos/straw-hat-and-sunglasses-on-beach-picture-id972500630?k=20&m=972500630&s=612x612&w=0&h=JTBvbaLjhQyeA4rhL0H4Fa4ivtD1KUzAUaCRdnP9Y3Q=" alt="" />
                                        <img className='play-btn' src="https://www.freepnglogos.com/uploads/play-button-png/index-media-cover-art-play-button-overlay-5.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blog;