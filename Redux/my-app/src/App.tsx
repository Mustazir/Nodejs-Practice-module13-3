
import { decrement, increment } from "./redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
 
  const dispatch=useAppDispatch();
  const {count }= useAppSelector((state)=>state.counter)
  

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDeccrement = ()=>{
    dispatch(decrement())
  }
  return (
    <>
      <h1>Redux Increment Decrement</h1>
      <button onClick={()=>handleIncrement(5)}>Increment by 5 </button>
      <button onClick={()=>handleIncrement(1)}>Increment by 1 </button>
      <div>{count}</div>
      <button onClick={handleDeccrement}>Decrement</button>
    </>
  );
}

export default App;
