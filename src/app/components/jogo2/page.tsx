import BotaoDesaparecer from "./botao";
import styles from './botao.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <BotaoDesaparecer/>
      <BotaoDesaparecer/>
      <BotaoDesaparecer/>
    </main>
  );

}