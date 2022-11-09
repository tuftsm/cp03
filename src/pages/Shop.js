import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/bike20.jpg';
import pic2 from './images/bike2.jpg';
import pic3 from './images/bike3.jpg';
import pic4 from './images/bike4.jpg';
import pic5 from './images/bike5.jpg';
import pic6 from './images/bike6.jpg';
import pic7 from './images/bike7.jpg';
import pic8 from './images/bike19.jpg';
import pic9 from './images/bike15.jpg';
import pic10 from './images/bike10.jpg';
import pic11 from './images/scottbike.jpg';
import pic12 from './images/bike12.jpg';
import pic13 from './images/bike13.jpg';
import pic14 from './images/bike14.jpg';
import pic15 from './images/bike9.jpg';
import pic16 from './images/bike16.jpg';
import pic17 from './images/bike1.jpg';
import pic18 from './images/bike11.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Shop() {
    return(
        <home>
            <Container>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic1}
                            alt="example"
                          />Trek Black 800T<br/>$499
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic2}
                            alt="example"
                          />Trek Green with Orange District<br/>$559
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic3}
                            alt="example"
                          />Trek Gray and Black Racer<br/>$699
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic4}
                            alt="example"
                          />Specialized Black StumpJumper<br/>$379
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic5}
                            alt="example"
                          />Specialized Green SwiftRider<br/>$409
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic6}
                            alt="example"
                          />Pinarello Yellow Dogma 6S<br/>$739
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic7}
                            alt="example"
                          />Specialized Black Epic<br/>$489
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic8}
                            alt="example"
                          />Cruiser Green Beach Rider<br/>$139
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic9}
                            alt="example"
                          />Scholar Brown Cardboard<br/>$109
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic10}
                            alt="example"
                          />Fizzari Blue Champion<br/>$199
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic11}
                            alt="example"
                          />Scott Black and Yellow Racer 2T<br/>$429
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic12}
                            alt="example"
                          />Cruiser Red Sidewalk Queen<br/>$189
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic13}
                            alt="example"
                          />Cannondale Black Pebble Paver<br/>$209
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic14}
                            alt="example"
                          />Giant Blue Antique E-Bike<br/>$1099
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic15}
                            alt="example"
                          />Terbain Silver Neighborhood King<br/>$99
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic16}
                            alt="example"
                          />Scott Black and Pink Panther<br/>$559
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic17}
                            alt="example"
                          />Specialized Red All-Terrain<br/>$489
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/construct">
                          <img
                            src={pic18}
                            alt="example"
                          />Giant Black Honeymooner<br/>$149
                        </Link>
                    </Col>
                </Row>
                
            
            </Container>
            
            <div className={styles.home}>
                ~<br/>"Life is better lived on two wheels"<br/>~
            </div>  
            <div className={styles.footer}>
                Utilized with <em><a href="https://herewecode.io/" target="_blank">Github classroom</a></em>&emsp;&emsp;&emsp;
                All images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any images.<br/>
            </div>            
        </home>    
            


    );
};


export default Shop;