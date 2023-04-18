import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../assets/css/pollsurvey.css';
import femaleimg from '../assets/images/female.png';
import maleimg from '../assets/images/male.png';

export const PollSurvey = () => {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const selectedImage = document.querySelector(`img[alt='${selectedOption}']`);
        if (selectedImage) {
            selectedImage.classList.add('selected');
        }
        return () => {
            if (selectedImage) {
                selectedImage.classList.remove('selected');
            }
        };
    }, [selectedOption]);

    const handleImageClick = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ...
    };

    return (
        <>
            <div className="pollsurvey-container er mt-4">
                <h1>Poll Survey</h1>
                <form onSubmit={handleSubmit}>
                    <Col>
                        <Row>
                            <Col className="custom-image" xs={6} md={2}>
                                <img
                                    src={maleimg}
                                    alt="Male"
                                    className={selectedOption === 'Male' ? 'selected' : ''}
                                    onClick={() => handleImageClick('Male')}
                                />
                                <img
                                    src={femaleimg}
                                    alt="Female"
                                    className={selectedOption === 'Female' ? 'selected' : ''}
                                    onClick={() => handleImageClick('Female')}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
