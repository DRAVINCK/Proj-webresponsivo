
import Relogio from './relogio';
import styles from './.module.css';


export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Relógio</h1>
            <Relogio />
        </div>
    );

}