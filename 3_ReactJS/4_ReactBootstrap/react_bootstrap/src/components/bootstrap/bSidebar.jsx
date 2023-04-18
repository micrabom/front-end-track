import React, { useState } from 'react';
import { Col, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg';

const Sidebar = () => {
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    const toggleAccount = () => {
        setIsAccountOpen(!isAccountOpen);
    }

    return (
        <Col lg={3} as="aside">
            <Nav className="flex-column p-2">
                <img src={Logo} alt="Logo" />
                <h5 onClick={toggleAccount} style={{cursor: 'pointer'}}>Account <i className={`bi bi-chevron-${isAccountOpen ? 'up' : 'down'}`}></i></h5>
                <Nav className={`flex-column ${isAccountOpen ? 'show' : 'collapse'}`}>
                    <Nav.Link href="#" style={{paddingLeft: '20px'}}>Profile</Nav.Link>
                    <Nav.Link href="#" style={{paddingLeft: '20px'}}>Settings</Nav.Link>
                    <Nav.Link href="#" style={{paddingLeft: '20px'}}>Logout</Nav.Link>
                </Nav>
            </Nav>
        </Col>
    );
};

export default Sidebar;
