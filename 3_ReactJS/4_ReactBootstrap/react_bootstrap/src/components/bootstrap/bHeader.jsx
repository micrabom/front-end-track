import { Container, Nav, Navbar } from 'react-bootstrap';


function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RambsDev</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link className="border " href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Header;