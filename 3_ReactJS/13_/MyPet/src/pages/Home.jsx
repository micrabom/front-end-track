
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../assets/css/home.css';

export const Home = () => {
    return (
        <>
            <div className="hero vh-100 d-flex align-items-center" >
                <div className="intro pt-md-1 pb-md-4">
                    <Row>
                        <Col xl={8}>
                            <h2 className="display-6 text-secondary">Hi! My name is</h2>
                            <div className="bd-title mt-0">
                                <h1 className="display-3 pri-color">Rab Michael Bombeo</h1>
                            </div>
                            <div className="wrapper">
                                <ul className="dynamic-txts">
                                    <li>
                                        <span>Developer</span>
                                    </li>
                                    <li>
                                        <span>Designer</span>
                                    </li>
                                    <li>
                                        <span>Freelancer</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-white my-3"></p>
                            {/* <Button href="#" className="me-2">
                                Portfolio
                            </Button>
                            <Button href="#" variant="outline-light">
                                Resume
                            </Button> */}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

