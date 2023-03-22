import Col from react-bootstrap
import logo from "../logo-white.png";
function HomePage(){
    return(
        <Container fluid className="home-page-container">
           <Row>
           <Col sm={2} md={3} lg={3}>
          <img src={logo} className="mergen-logo" alt="logo" />
        </Col>
        <Col></Col>
           </Row>

        </Container>
    );
}

export default HomePage;