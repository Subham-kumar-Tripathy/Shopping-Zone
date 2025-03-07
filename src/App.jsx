import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <div className="bg-dark-pink">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} /> 
      </Routes>
    </div>)
};

export default App;

