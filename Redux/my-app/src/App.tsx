
import { decrement, increment } from "./redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
 
  const dispatch=useAppDispatch();
  const {count }= useAppSelector((state)=>state.counter)
  

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
      <div>{count}</div>
      <button onClick={handleDeccrement}>Decrement</button>
    </>
  );
}

export default App;
