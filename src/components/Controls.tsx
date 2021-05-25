import { useStore } from "store";

const Controls = () => {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const asyncAddBears = useStore((state) => state.asyncAddBears);

  return (
    <>
      <button onClick={() => increasePopulation()}>one up</button>
      <button onClick={() => increasePopulation(10)}>bulk up</button>
      <button onClick={removeAllBears}>bulk up</button>
      <button onClick={asyncAddBears}>async up</button>
    </>
  );
};

export default Controls;
