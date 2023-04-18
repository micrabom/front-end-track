import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './bootstrap/bFooter';
import Header from './bootstrap/bHeader';
import Main from './bootstrap/bMain';
import Sidebar from './bootstrap/bSidebar';


const Blog = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <Header />
            <Container className="flex-grow-1">
                <Row>
                    <Col md={8} style={{ display: "inline-block", width: "66.666%" }}>
                        <div className="border p-1">
                            <Main />
                        </div>
                    </Col>
                    <Col md={4} style={{ display: "inline-block", width: "33.333%" }}>
                        <div className="border p-1">
                            <Sidebar />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Blog;
