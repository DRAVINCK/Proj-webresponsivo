'use client'

import React from 'react';
import styles from './bolinha.module.css';
import usaStorea from './store.js'; // import useStore from the correct file


const Bolinha = ()=> {
  const pular = usaStorea(state => state.pular);
  const setPular = usaStorea(state => state.setPular);

  const handleClick = () => {
    setPular();
    setTimeout(() => setPular(), 500);
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.bolinha} ${pular ? styles.pular : ''}`} />
      <button className={styles.button} onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
export default Bolinha;