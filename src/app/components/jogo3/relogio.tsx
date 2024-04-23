import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h2>Horário atual: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Relogio;