import React from 'react';
import { Button, Carousel, Container, Form } from 'react-bootstrap';

const Main = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    };

    return (
        <Container className="main">
            <div className="section">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400?text=First+slide"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400?text=Second+slide"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400?text=Third+slide"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="section mt-5">
                <h1>Form Section</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum perferendis, qui ea inventore quaerat.</p>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required data-validation-message="Please enter your email address." />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <div className="invalid-feedback">
                            Please enter your email address.
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} required data-validation-message="Please enter a message." />
                        <div className="invalid-feedback">
                            Please enter a message.
                        </div>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Elective Track</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Select</option>
                            <option>FrontEnd</option>
                            <option>BackEnd</option>
                            <option>Quality Assurance</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className="mt-3" type="submit">Submit form</Button>
                </Form>

            </div>
        </Container>
    );
};

export default Main;
