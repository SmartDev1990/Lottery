import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import classes from "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="containerroad" background-color="#10083B" style={{marginTop: "50px", marginBottom: "50px"}}>
    <div>
    <h3 className="feature-content2">TIMELINE SCHEDULE</h3>
      <div className="timeline">
  <div className="container1 left">
    <div className="content">
      <h2>Phase 1</h2>
      <p>
        IDEA<br />
        Website<br />
        Smart Contract
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="content">
      <h2>Phase II</h2>
      <p>
        Chain Integrated <br />
        Build Community
      </p>
    </div>
  </div>
  <div className="container1 left">
    <div className="content">
      <h2>Phase III</h2>
      <p>
        Partnership <br />
        Minting Start <br />
        NFT Lottery
      </p>
    </div>
  </div>
  <div className="container1 right">
    <div className="content">
      <h2>Distribution</h2>
      <p>
        Token Distribution <br />
        Token lottery start
      </p>
    </div>
  </div>
</div>
</div>
    </section>
  );
}

export default Roadmap;
