'use client'
import React, { useState } from 'react';
import styles from './botao.module.css';

const BotaoDesaparecer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(5);

  const handleClick = () => {
    setIsVisible(false);
    let counter = 5;
    const intervalId = setInterval(() => {
      counter--;
      setCountdown(counter);
      if (counter === 0) {
        clearInterval(intervalId);
        setIsVisible(true);
      }
    }, 1000);
  };

  return (
    
    <div>
      {isVisible ? (
        <><h1>Truque de mágica!</h1><button className={styles.button} onClick={handleClick}>Clique Aqui</button></>
      ) : (
        <p>Botão escondido. Voltará em {countdown} segundos.</p>
      )}
    </div>
  );
};

export default BotaoDesaparecer;