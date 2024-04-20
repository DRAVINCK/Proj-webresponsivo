import { useState } from 'react';

function SeuComponente() {
  const [pular, setPular] = useState(false);

  const togglePular = () => {
    setPular(prevPular => !prevPular);
  };

  // ...
}