import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col, Button } from "reactstrap";
import logo1 from "../../Assets/twitter.webp";
import logo2 from "../../Assets/telegram.png";
import classes from "./Hero.css";
import { FaDiscord, FaTwitter, FaTelegram } from 'react-icons/fa';
import SocialMediaButton from './SocialMediaButton';


const Hero = () => {
return (
    <section className="block" style={{paddingTop: "50px", paddingButtom: "20px"}}>
		<div className="hero">
			<div className="column left-column">
					<h1 className="title">PandaMint</h1>
					<p className="herosubtitle">Win the jackpot by holding $PDM tokens or NFTs</p>
          <div>
         <a href="#/nft_minting" className="cta-button" style={{ marginRight: '10px' }}>Buy NFT Ticket</a>
         <a href="https://pandamint.gitbook.io/pandamint/" className="cta-button">White Paper</a>
         </div>
          <div className="social">
            <SocialMediaButton className="social" icon={<FaDiscord />} link="https://www.facebook.com/your-page-url" />
            <SocialMediaButton className="social" icon={<FaTwitter />} link="https://www.twitter.com/pandamintnft" />
            <SocialMediaButton className="social" icon={<FaTelegram />} link="https://t.me/pandamint" />
        </div>
			</div>
			<div className="column right-column">
			<img src="https://i.ibb.co/JQNtSPx/73e3daab5ea2f938055b71166864cd38.png" />
			</div>
	</div>
    </section>
  );
}

export default Hero;
