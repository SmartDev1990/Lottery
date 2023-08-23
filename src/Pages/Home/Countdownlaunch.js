import React from 'react';
import Countdown from './Countdown';

function App() {
  const targetDate = new Date('2023-10-02T23:59:59').getTime();

  return (
    <div className="countdown">
      <h1>Mexc Listing</h1>
      <Countdown targetDate={targetDate} />
    </div>
  );
}

export default App;
