import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
