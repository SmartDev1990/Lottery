import React, { useEffect, useState } from 'react';
import './Countdown.css';

function Countdown({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = targetDate - now;
      setTimeRemaining(remaining);

      if (remaining < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [targetDate]);


  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="countdown-container">
      <div className="countdown-time ">
        <span className="countdown-number">{days}</span>
        <span className="countdown-label">days</span>
      </div>
      <div className="countdown-time ">
        <span className="countdown-number">{hours}</span>
        <span className="countdown-label">hours</span>
      </div>
      <div className="countdown-time ">
        <span className="countdown-number">{minutes}</span>
        <span className="countdown-label">minutes</span>
      </div>
      <div className="countdown-time ">
        <span className="countdown-number">{seconds}</span>
        <span className="countdown-label">seconds</span>
      </div>
    </div>
  );
}

export default Countdown;
