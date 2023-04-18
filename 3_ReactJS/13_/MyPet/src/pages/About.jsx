import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import '../assets/css/about.css';
import designPic from '../assets/images/mypic.svg';

export function About() {
    return (
        <>
            <div className="about-container py-5 mt-5">
                <Row>
                    <Col md={4}>
                        <Image src={designPic} alt="about me" fluid />
                    </Col>
                    <Col md={8}>
                        <h1 className="pri-color">About me</h1>
                        <p className="text-slightwhite">
                            <i>A tech enthusiast and aspiring developer. I've been working as a general virtual assistant for about three years, but right now, my attention is on pursuing my ideal profession in web development. I have a Bachelor of Science in</i>
                            <strong> Computer Engineering </strong>
                            <i>, and I received my </i>
                            <strong>software development</strong>
                            <i> training through Village88, a company founded by the same person who established CodingDojo, provided me with the opportunity to learn from some of the most experienced developers in the industry, and I am grateful for the skills and knowledge. </i>
                        </p>
                        <p className="text-slightwhite">
                            <i>Now my objective is to provide innovative, quick solutions that support business empowerment and growth. I take pleasure in my ability to pay attention to detail, solve problems, and manage projects. These traits have allowed me to provide great service and become recognized as a</i>
                            <strong>Top Rated freelancer</strong>
                            <i> on Upwork. I have faith in my technological know-how and my capacity to rise to any challenge.</i>
                        </p>
                    </Col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                </Row>
            </div>
        </>
    );
}
