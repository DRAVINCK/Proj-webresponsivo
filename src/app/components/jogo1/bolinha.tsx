"use client"
import React, { useState } from 'react';
import styles from './bolinha.module.css';

const Bolinha = () => {
  const [pular, setPular] = useState(false);

  const handleClick = () => {
    setPular(true);
    setTimeout(() => setPular(false), 500);
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.bolinha} ${pular ? styles.pular : ''}`} />
      <button className={styles.button} onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default Bolinha;