import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/stoicbiker.jpg';
import pic2 from './images/blurbike.jpg';
import pic3 from './images/bwbiker.jpg';
import pic4 from './images/familybike.jpg';
import pic5 from './images/kidbike.jpg';
import pic6 from './images/mudbike.jpg';
import pic7 from './images/police.jpg';
import pic8 from './images/racer1.jpg';
import pic9 from './images/redrocks.jpg';
import pic10 from './images/scenic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blog() {
    return(
        <home>
            <div><br/><br/><br/><br/></div>
            <div className={styles.whoops}>
                Have a #tuftsbicycle moment to share? <br/>
                <button>
                    <Link  to="/construct">SUBMIT BLOG</Link>
                </button>
            </div>
            <div><br/><br/><br/></div>
            <Container>
            <div className={styles.overall}>
                
                <Row>
                    <Col>My bicycle is just perfect. Every day is a good day riding around the market on it. Thanks #tuftsbicycle<br/>--Enrique (Bolivia)</Col>
                    <Col><img src={pic1} alt="bike"/></Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col><img src={pic2} alt="bike"/></Col>
                    <Col>This Cervelo from #tuftsbicycle was exactly what I need in a bike. I won this race thanks to it!<br/>--Stan (Napa Valley)</Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>  
                <Row>
                    <Col>Got my son his first bike...he loves it! The kid's got miles and miles of fun ahead of him.<br/>--Tommy (Gainesville)</Col>                
                    <Col><img src={pic3} alt="bike"/></Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>  
                <Row>
                    <Col><img src={pic4} alt="bike"/></Col>
                    <Col>Our favorite family activity! No other store except #tuftsbicycle could've made our dreams of this bike into a reality.<br/>--The Staceys (Kansas City)</Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col>Jessie's first race. She killed it, 3rd overall! Big thanks to #tuftsbicycle for getting it all set for the big day.<br/>--Joey (Wilmington)</Col>
                    <Col><img src={pic5} alt="bike"/></Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>  
                <Row>
                    <Col><img src={pic6} alt="bike"/></Col>
                    <Col>Favorite ride in the world! S/O to that beautiful machine of a bike (cred #tuftsbicycle). Can't wait to be back soon!<br/>--Dale (Jacksonville)</Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col>Bike patrol for the day. Big up to #tuftsbicycle for backing the blue with their custom police bikes.<br/>--Trayce (Oakland)</Col>
                    <Col><img src={pic7} alt="bike"/></Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col><img src={pic8} alt="bike"/></Col>
                    <Col>Gran Fondo was a success! Top 10 for females, and 4th in my age division. #tuftsbicycle ftw!!<br/>--Jen (Huntsville)</Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col>Took the boys out for a ride today. Don't think they love it quite as much as me...maybe one day ha!<br/>--Nico (Mesa)</Col>
                    <Col><img src={pic9} alt="bike"/></Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col><img src={pic10} alt="bike"/></Col>
                    <Col>I could stare at this view for an eternity! Those #tuftsbicycles sure are pretty...oh and the background is nice too ;P<br/>--Bentley (Hartford)</Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
            </div>
            </Container>
            
            <div className={styles.home}>
                ~<br/>"Life is better lived on two wheels"<br/>~
            </div>  
            <div className={styles.footer}>
                Utilized with <em><a href="https://github.com/tuftsm/cp03.git" target="_blank">Github classroom</a></em>&emsp;&emsp;&emsp;
                All images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any images.<br/>
            </div>             
        </home>    
            


    );
};


export default Blog;