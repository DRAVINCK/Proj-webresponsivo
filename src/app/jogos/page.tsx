"use client"

import styles from '../components/jogo1/bolinha.module.css';
import Bolinha from '../components/jogo1/bolinha';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className='card'>
      <Bolinha />
      <Bolinha />
      <Bolinha />
      </div>
      
    </main>
  )
}