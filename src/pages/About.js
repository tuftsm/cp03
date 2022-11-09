import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/manwbike.jpg';
import pic2 from './images/store.jpg';
import pic3 from './images/groupbikes.jpg';

function About() {
    return(
        <home>
            <div className={styles.photoGridContainer}>
                <div className={styles.photoGrid}>
                    <img src={pic1} alt="bike"/>
                <div className={styles.bio}>
                    <strong><br/>Bio</strong>
                </div>
                    <br/>Tufts' Bicycle is the direct product of one man's obsession with bicycles. Since he was a young child, Timmy Tufts was always active--crawling, then walking, then running. His life changed one Christmas morning when, after being gifted a bicycle, he discovered the greatest art known to man: cycling. <br/><br/>Since that day, Timmy's sole mode of transport has been a bicycle. From trips to the store to making his way across town, Timmy eats, sleeps, and breathes cycling.<br/><br/>
                    <img src={pic2} alt="bike"/>
                    <br/>Upon the passing of Timmy's great-uncle Richard, and with a newfound inheritance beyond mortal comprehension, Timmy invested in a humble bike shop--and thus began Tufts' Bicycle. <br/><br/>Now, almost two decades later, Tufts Bicycle hosts an impressive inventory of over one thousand bicycles. Servicing bicycle enthusiasts nationwide, Tufts' Bicycle has grown from a small town bicycle retailer to a nationwide community of cyclists.<br/><br/>  
                    <img src={pic3} alt="bike"/>
                    <br/>Tufts' Bicycle hosts the annual Pedal for Peace ride, which has been nominated for multiple Nobel Peace Prizes. Through it all, Timmy's love for cycling has continued to flourish. With every bicycle sold, Tufts' Bicycle donates fifty percent of the profit to Timmy's Tots, a charity which introduces cycling to children in need. <br/><br/>Rolling forward, Tufts' Bicycle has goals to expand internationally, with sights of becoming the world's foremost source for all things bicycles.<br/><br/>Each bike sold guarantees a happy, healthy, and heartening time. <br/><br/>
                </div>
            </div>
            <div className={styles.home}>
                ~<br/>"While some see two wheels and a handlebar, I see a lifetime of adventure and joy"<br/>~
            </div>  
            <div className={styles.footer}>
                Utilized with <em><a href="https://herewecode.io/" target="_blank">Github classroom</a></em>&emsp;&emsp;&emsp;
                All images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any images.<br/>
            </div>   
        </home>
    );
};


export default About;