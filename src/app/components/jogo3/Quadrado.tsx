'use client'
import { useState } from 'react';
import styles from './Quadrado.module.css';

export default function Home() {
  const cores = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'cyan', 'magenta', 'pink', 'brown'];
  const [corIndex, setCorIndex] = useState(0);

  const mudarCorQuadrado = () => {
    const novoIndex = (corIndex + 1) % cores.length;
    setCorIndex(novoIndex);
  };

  return (
    <main className={styles.QuadradoContainer}>
      <div className={styles.Quadrado} style={{ backgroundColor: cores[corIndex] }}></div>
      <button className={styles.Botao} onClick={mudarCorQuadrado}>Clique Aqui</button>
    </main>
  );
}
