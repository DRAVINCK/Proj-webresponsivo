'use client'

import React, { useState, useEffect } from 'react';
import styles from './bolinha.module.css';

function Bolinha() {
  const [contador, setContador] = useState(0);
  const [ultimoPulo, setUltimoPulo] = useState(0);
  const [pular, setPular] = useState(false);
  const [cardVermelho, setCardVermelho] = useState(false);
  const [corBolinha, setCorBolinha] = useState('rgb(0, 0, 255)'); // Inicialmente azul

  const handleClick = () => {
    const agora = Date.now();
    const limiteContador = 4;
    if (agora - ultimoPulo > 1000 && !cardVermelho) {
      setPular(true);
      setContador(contador + 1);
      setUltimoPulo(agora);
      setTimeout(() => setPular(false), 500);// Desativa a animação de pulo 
      if (contador === limiteContador) {
        setTimeout(() => setCardVermelho(true), 1000);// Ativa o card vermelho após o limite de pulos
      }
      // Aumenta o vermelho a cada pulo
      const [r, g, b] = corBolinha.slice(4, -1).split(', ').map(Number);
      const mudancaCor = 255 / (limiteContador + 1); // Calcula a mudança de cor necessária por clique
      setCorBolinha(`rgb(${Math.min(r + mudancaCor, 255)}, ${g}, ${Math.max(b - mudancaCor, 0)})`);
    }
  };

  useEffect(() => {
    if (cardVermelho) {
      const interval = setInterval(() => {
        const [r, g, b] = corBolinha.slice(4, -1).split(', ').map(Number);
        if (r > 0) {
          setCorBolinha(`rgb(${Math.max(r - 17, 0)}, ${g}, ${b})`); // Diminui o vermelho
        } else {
          clearInterval(interval);
          setCorBolinha('rgb(0,0,255)'); // Redefine a cor da bolinha para azul
          setCardVermelho(false); // Redefine cardVermelho para false
          setContador(0); // Redefine o contador de pulos para 0
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [cardVermelho, corBolinha]);

  return (
    <div className={`${styles.card} ${cardVermelho ? styles.vermelho : ''}`}>
      {cardVermelho ? 'Resfriando...' : (
        <>
          <div className={`${styles.bolinha} ${pular ? styles.pular : ''}`} style={{ backgroundColor: corBolinha }} />
          <button className={styles.button} onClick={handleClick}>Clique aqui</button>
          <p>Pulos: {contador}</p>
        </>
      )}
    </div>
  );
}

export default Bolinha;