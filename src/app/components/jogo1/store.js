
import create from 'zustand';

const usaStorea = create(set => ({
  pular: false,
  setPular: () => set(state => ({ pular: !state.pular })),
}));

export default usaStorea;