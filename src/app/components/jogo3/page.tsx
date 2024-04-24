
import styles from './Quadrado.module.css'
import Quadrado from './Quadrado'

export default function Home() {
  return (
    <main className={styles.main}>
      <Quadrado/>
      <Quadrado/>
      <Quadrado/>
      <Quadrado/>
      <Quadrado/>
  
    </main>
  )
}