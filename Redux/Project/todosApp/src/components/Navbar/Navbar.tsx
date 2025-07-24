import { Link } from "react-router";
import { ModeToggle } from "../mode-toggole";



const Navbar = () => {
    return (
      <nav className="max-w-7xl mx-auto px-4 align-center items-center gap-2 sm:px-6 lg:px-8 flex mt-3">
        
        <div className="max-w-7xl mx-auto px-4 align-center items-center gap-2 sm:px-6 lg:px-8 flex ">
          <p className="text-3xl font-bold text-center">Todo App</p>
        <Link to="/todos">task</Link>
        <Link to="/users">Users</Link>
          </div>
          <ModeToggle/>
      </nav>  
    );
};

export default Navbar;