import { useSelector } from "react-redux";

function Child() {
  const counter = useSelector((state) => state.counter);
  return <h3>Value from Child : {counter}</h3>;
}
export default Child;
