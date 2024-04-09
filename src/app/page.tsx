import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Não isso não é uma copia da apresentação do Next.js.
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="uol.com.br"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub do projeto <span>-&gt;</span>
          </h2>
          <p>Veja todo o nosso projeto. </p>
        </a>

        <a
          href="https://www.corinthians.com.br/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Melhor time do Brasil <span>-&gt;</span>
          </h2>
          <p>Acompanhe o maior do Brasil e fique por dentro das novidades.</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Clica ai vai <span>-&gt;</span>
          </h2>
          <p>Esse é troll.</p>
        </a>
      </div>
    </main>
  )
}
