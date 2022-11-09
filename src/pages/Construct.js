import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/wheel.gif';

function Construct() {
    return(
        <home>
            <div className={styles.whoops}>
                Page currently under construction. Try again later.
                <img src={pic1} alt="spinning wheel"/>
            </div>
            <div className={styles.footer}>
                Utilized with <em><a href="https://herewecode.io/" target="_blank">Github classroom</a></em>&emsp;&emsp;&emsp;
                All images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any images.<br/>
            </div>   
        </home>
    );
};


export default Construct;