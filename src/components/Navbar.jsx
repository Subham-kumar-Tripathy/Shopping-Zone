import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}=useSelector((state) => state);
  return(
    <div >
      <nav className="flex justify-between items-center h-[48px] max-w-6xl mx-auto shadow-md">

        <NavLink to="/">
        <div className="ml-5">
          <img src="../logo-png.png " className="h-12 w-[80px]  "/>
        </div>
        </NavLink>

        <div className="flex items-center font-medium text-white mr-5 space-x-6 text-2xl italic font-bold">
          <NavLink  to="/">
          <p>Shopping Zone</p>
          </NavLink>
        </div>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 font-semibold">
          <NavLink  to="/">
          <p>Home</p>
          </NavLink>

          <NavLink  to="/cart">
          <div className="relative">
          <FaShoppingCart className="text-2xl"/>
          {
            cart.length >0 &&
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white"
            >{cart.length}</span>
          }
          </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
