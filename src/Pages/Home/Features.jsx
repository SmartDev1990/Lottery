import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col, Button } from "reactstrap";
import logo1 from "../../Assets/twitter.webp";
import logo2 from "../../Assets/telegram.png";
import classes from "./Features.css";


const Features = () => {
return (
    <section style={{paddingTop: "50px", paddingButtom: "20px"}}>
    <h1 class="titleheader">How to win the jackpots</h1>
    <div class="hero">
        <div class="box">
        <img class="image" src="https://i.ibb.co/QkSD7WX/3517299-1.png" />
            <h1 class="titlefeatures">Get Tickets</h1>
            <p class="sub">Buy Lottery Ticket.</p>
        </div>
        <div class="box">
        <img class="image" src="https://i.ibb.co/QDNdQGB/images.png" />
            <h1 class="titlefeatures" >Get Numbers</h1>
            <p class="sub">Get Ticker numbers</p>
        </div>
        <div class="box">
        <img class="image" src="https://i.ibb.co/z66kwMR/winner-4208775-3485788.png" />
            <h1 class="titlefeatures">Get Winners</h1>
            <p class="sub">Wait for Announcement</p>
        </div>
    </div>
    </section>
  );
}

export default Features;
