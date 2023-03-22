import "../App.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../logoWhite.png'

function HomePage(){
    document.title = "Ana Sayfa";
    return(
        <Container fluid className="home-page-container">
           <Row className="deneme">
           <Col sm={2} md={3} lg={3}><img src={logo} className="mergen-logo" alt="logo" /></Col>
           </Row>
        </Container>
    );
}

export default HomePage;