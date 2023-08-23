import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col, Button } from "reactstrap";
import logo1 from "../../Assets/twitter.webp";
import logo2 from "../../Assets/telegram.png";
import classes from "./About.css";


const About = () => {
return (
	<section style={{paddingTop: "50px", paddingButtom: "20px"}}>
		<div className="about">
    <div className="column right-column">
    <img src="https://www.partnerlottery.com/public/upload/images/slides/centrbox.png" />
    </div>
			<div className="column left-column">
					<h1>About PandaMint</h1>
					<p>PandaMint is a dedicated lottery and NFT minting platform designed with the community in mind.
					Any holder of NFTs or $PDM tokens has the exciting opportunity to compete for daily jackpot rewards on the PandaMint platform.
					Our platform is seamlessly integrated with the BNB network, which offers a range of impressive benefits.
					The decision to build PandaMint on the BNB chain was influenced by its exceptionally low transaction fees,
					making it the optimal choice for creating a user-friendly and cost-effective experience on the PandaMint platform.</p>
			</div>
	</div>
	</section>
  );
}

export default About;
