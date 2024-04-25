"use client";

import React from "react";
import create from "zustand";
import styles from "./bolinha.module.css";

const useStore = create((set) => ({
  contador: 0,
  ultimoPulo: 0,
  pular: false,
  cardVermelho: false,
  corBolinha: "rgb(0, 0, 255)",
  setContador: () => set((state) => ({ contador: state.contador + 1 })),
  setUltimoPulo: (agora) => set({ ultimoPulo: agora }),
  setPular: (value) => set({ pular: value }),
  setCardVermelho: (value) => set({ cardVermelho: value }),
  setCorBolinha: (cor) => set({ corBolinha: cor }),
}));

function Bolinhazuzu() {
  const {
    contador,
    ultimoPulo,
    pular,
    cardVermelho,
    corBolinha,
    setContador,
    setUltimoPulo,
    setPular,
    setCardVermelho,
    setCorBolinha,
  } = useStore();

  const handleClick = () => {
    const agora = Date.now();
    const limiteContador = 4;
    if (agora - ultimoPulo > 1000 && !cardVermelho) {
      setPular(true);
      setContador();
      setUltimoPulo(agora);
      setTimeout(() => setPular(false), 500);
      if (contador === limiteContador) {
        setTimeout(() => setCardVermelho(true), 1000);
      }
      const [r, g, b] = corBolinha.slice(4, -1).split(", ").map(Number);
      const mudancaCor = 255 / (limiteContador + 1);
      setCorBolinha(
        `rgb(${Math.min(r + mudancaCor, 255)}, ${g}, ${Math.max(
          b - mudancaCor,
          0
        )})`
      );
    }
  };

  React.useEffect(() => {
    if (cardVermelho) {
      setTimeout(() => {
        setCardVermelho(false);
        setContador(0);
        setCorBolinha("rgb(0, 0, 255)");
      }, 1000);
    }
  }, [cardVermelho]);

  return (
    <div className={`${styles.card} ${cardVermelho ? styles.vermelho : ""}`}>
      {cardVermelho ? (
        "Resfriando..."
      ) : (
        <>
          <div
            className={`${styles.bolinha} ${pular ? styles.pular : ""}`}
            style={{ backgroundColor: corBolinha }}
          />
          <button className={styles.button} onClick={handleClick}>
            Clique aqui
          </button>
          <p>Pulos: {contador}</p>
        </>
      )}
    </div>
  );
}

export default Bolinhazuzu;
