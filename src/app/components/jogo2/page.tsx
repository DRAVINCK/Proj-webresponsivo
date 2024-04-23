import BotaoDesaparecer from "./botao";
import styles from './botao.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Truque de mágica!</h1>
      <BotaoDesaparecer/>
    </main>
  );

}