import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <>
            <div data-aos="zoom-in-up" id='about' style={{marginTop:"100px"}} className="about">
            <h1 className='about-t'>𝒲𝑒𝓁𝒸𝑜𝓂𝑒</h1>
            <Container className='p-5'>
                <Row>
                    <Col className='ab'>
                        <img className='p-2' src="https://template.hasthemes.com/tourve/tourve/assets/images/icon/icon-4.png" alt="" />
                        <h2 className='pt-2 pb-3'>Welcome to Lucky Travel Agency</h2>
                        <p>Greet loud and clear: Greet your visitors in audible tone and friendly voice. Don't only shake head or gesticulate. Say Good morning / Good afternoon / Namaskar as appropriate. Stand up and greet.</p>
                        <p>Sample 1. Our quest is to manage business travel and fulfill vacation dreams through our commitment to personalized, world-class service. As members of the [Lucky Travel Agency] management team, we provide the highest level of travel management in the industry.</p>
                    </Col>
                   <Col className='about-img'>
                    <img src="https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg" alt="" />
                    {/* <img className=' h-25' src="https://img.freepik.com/free-vector/minimalist-floral-banner-with-summer-theme_336924-1351.jpg?size=626&ext=jpg" alt="" /> */}
                    </Col>
                    <Col className='ab'>
                        <img className='p-2' src="https://template.hasthemes.com/tourve/tourve/assets/images/icon/icon-4.png" alt="" />
                        <h2 className='pt-2 pb-3'>Mission & Vission</h2>
                        <p><span className="fw-bold">Mission:</span> Our Mission is to perform and deliver excellent quality service to our clients. Providing them unforgettable travel, enjoyable, with guaranteed services that exceed their expectations With this objective, we aim to earn the reputation as "Your Preferred Travel Agency"</p>
                        <p><span className="fw-bold">Vision:</span> To be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.The first is a statement of vision. It provides a destination for the organization. Next is a statement of mission. These are critical statements for the organization and the individuals who run the organization</p>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
};

export default About;