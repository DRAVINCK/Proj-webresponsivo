"use client"

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
        <p>
          Bem vindo aos mini jogos.
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="./components/jogo1"
          className={styles.card}
          target="_blank"

        >
          <h2>
            JOGO 1 <span>-&gt;</span>
          </h2>
          <p>JOGO DE FAZER A BOLINHA PULAR. </p>
        </a>

        <a
          href="./components/jogo2"
          className={styles.card}
          target="_blank"
        >
          <h2>
            JOGO 2 <span>-&gt;</span>
          </h2>
          <p>JOGO DO BOTAO MAGICO.</p>
        </a>

        <a
          href="./components/jogo3"
          className={styles.card}
          target="_blank"
        >
          <h2>
            JOGO 3 <span>-&gt;</span>
          </h2>
          <p>JOGO DE MUDAR A COR.</p>
        </a>

      </div>

  
    </main>
  )
}
