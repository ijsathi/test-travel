import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    const [data, setData] = useState([]);

    useEffect(() => (
        fetch("service.json")
            .then(res => res.json())
            .then(data => setData(data))
    ), [])
    return (
        <>
            <div data-aos="fade-up" id='service' className="text-part d-flex justify-content-center mb-5">
                <div className=" w-50 text-center">
                    <h1>We choose for you</h1><span className="s"></span>
                    <p style={{ padding: "8px" }}>Travel agents offer advice on destinations, plan trip itineraries, and make travel arrangements for clients. Travel agents sell transportation, lodging, and admission to entertainment activities to individuals and groups planning trips.</p>
                </div>
            </div>
            <Row data-aos="fade-right" xs={1} md={3} className="g-4 w-100 car">
                {
                    data.map(dt =>
                        <>
                            <Col key={dt.id}>
                                <Card>
                                    <Card.Img className='car-img' style={{ height: "270px" }} variant="top" src={dt.img} />
                                    <Card.Body>
                                        <Card.Title className='title'>{dt.name}  /  ${dt.price}</Card.Title>
                                        <Card.Text>
                                            {dt.desc}
                                        </Card.Text> <hr />
                                        <p style={{ color: "#565656" }}> <i style={{ paddingRight: "5px" }} className="fas fa-history"></i>{dt.time}

                                            <span style={{ paddingLeft: "18px" }}> <i style={{ paddingRight: "4px" }} className="fas fa-user"></i>{dt.people}+</span>
                                            <span style={{ paddingLeft: "84px" }}><i className="fas fa-star ss"></i><i className="fas fa-star ss"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></span> </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                }
            </Row>
        </>
    );
};

export default Service;