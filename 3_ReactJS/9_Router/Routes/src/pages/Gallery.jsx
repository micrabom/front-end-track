import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import '../assets/css/gallery.css';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';

export const Gallery = () => {
    const images = [img1, img2, img3, img4];

    return (
        <div className='custom-container'>
            <div className="category">
                <Col>
                    <Row>
                        <h1>Selfies</h1>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {images.map((img, index) => (
                            <Col className='custom-image' xs={6} md={2} key={index}>
                                <Image  src={img} thumbnail />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </div>
            <div className="category">
                <Col>
                    <Row>
                        <h1>Families and Friends</h1>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {images.map((img, index) => (
                            <Col className='custom-image' xs={6} md={2} key={index}>
                                <Image  src={img} thumbnail />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </div>
            <div className="category">
                <Col>
                    <Row>
                        <h1>Adventures</h1>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {images.map((img, index) => (
                            <Col className='custom-image' xs={6} md={2} key={index}>
                                <Image  src={img} thumbnail />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </div>
        </div>
    );
};


