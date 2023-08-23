import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Stake from "./Stake";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Footer from './Footer';
import App from './Countdownlaunch';

function Home() {

  return (
        <div>
            <Hero />
            <App />
            <About />
            <Features />
            <Stake />
            <Roadmap />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;
