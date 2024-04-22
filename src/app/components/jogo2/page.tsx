import BotaoDesaparecer from "./botao";
import styles from './botao.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Truque de mágica!</h1>
      <h2 className={styles.button}><BotaoDesaparecer/></h2>
    </main>
  );

}