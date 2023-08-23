import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col, Button } from "reactstrap";
import logo1 from "../../Assets/twitter.webp";
import logo2 from "../../Assets/telegram.png";
import classes from "./Stake.css";
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import SocialMediaButton from './SocialMediaButton';


const Stake = () => {
return (
		<div className="stake">
			<div className="column left-column">
					<h1 className="staketitle">Stake & Earn</h1>
					<p className="stakesubtitle" >Experience the power of staking like never before! With our innovative staking program, you can earn remarkable rewards of up to 360%.
					Simply lock in your tokens and watch your holdings grow as you participate in our ecosystem.
					Whether you're a seasoned investor or new to the crypto space, our high-yield staking offers an incredible opportunity to maximize your returns.
					Don't miss out on the chance to benefit from our generous staking rewards – join us today and start earning!</p>
					<a href="#/staking" className="cta-button">Stake Now</a>
			</div>
			<div className="column right-column">
			<img src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-investment-5112589-4269000.png" />
			</div>
	</div>
  );
}

export default Stake;
