import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import background from './images/black_bike.jpg'
import { Image, View } from 'react';

function Home() {
    return(
        <home>
        <div class="section">  
            <div className={styles.home}>
                <img 
                    style={{width:'100%'}}
                    src={background} alt="bike"/>
            </div>
            <div className={styles.topRight}><emphasis>Your Bicycle.<br/>Your Way.</emphasis></div>
        </div>
        <div className={styles.home}>
            100% Customer Satisfaction Guarantee <br/>~<br/> Free Shipping Nationwide <br/>~<br/> Voted Best Online Bicycle Shop <br/><br/>
        </div>
        <div className={styles.footer}>
            Utilized with <em><a href="https://github.com/tuftsm/cp03.git" target="_blank">Github classroom</a></em>&emsp;&emsp;&emsp;
            All images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any images.<br/>
        </div>   
        </home>
    );
};


export default Home;