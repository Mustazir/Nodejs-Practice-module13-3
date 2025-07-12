import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {

  const dispatch =useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment())
  }

  const handleDeccrement = ()=>{
    dispatch(decrement())
  }
  return (
    <>
      <h1>Redux Increment Decrement</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div>0</div>
      <button onClick={handleDeccrement}>Decrement</button>
    </>
  );
}

export default App;
