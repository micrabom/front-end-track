import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/not-found.css';

export const NotFound = () => {
    return (
        <div className='notfound-container my-5'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <div className='text-center'>
                        <h1>404 Page Not Found</h1>
                        <p>The page you are looking for does not exist or has been moved.</p>
                        <Link to='/'>
                            <Button variant='primary'>Go Back Home</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

