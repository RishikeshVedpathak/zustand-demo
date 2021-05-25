import { useStore } from "store";

const BearCounter = () => {
  const bears = useStore((state) => state.bears);
  return <div>{bears} around here....</div>;
};

export default BearCounter;
