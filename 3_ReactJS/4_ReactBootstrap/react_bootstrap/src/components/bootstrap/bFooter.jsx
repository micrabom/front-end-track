import React from 'react';
import { Container } from 'react-bootstrap';

const bFooter = () => {
    return (
        <footer className="bg-dark text-light flex-shrink-0 mt-5">
            <Container>
                <p className="text-center my-3">&copy; 2023 RambsDev. All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default bFooter;
