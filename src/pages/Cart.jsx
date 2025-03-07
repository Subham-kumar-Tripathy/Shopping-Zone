import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  const {cart}=useSelector((state) => state);
  const[totalamount,settotalamount]=useState(0);

  useEffect(()=>{
    settotalamount( cart.reduce((acc,curr)=> acc+curr.price,0));
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className="flex max-w-6xl justify-between ">
          <div>
          {
            cart.map((item,index) =>{
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
          </div>

          <div className="flex flex-col justify-between h-auto w-[300px]">
            <div className="mt-12">
              <div className="text-l font-semibold text-dark-pink">Your Cart</div>
              <div className="text-4xl text-dark-pink font-bold">Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p className="font-bold">Total Amount: ${totalamount}</p>

              <button className="w-80 h-10 bg-dark-pink text-white mb-12 rounded-lg">
                BUY NOW
              </button>
            </div>
          </div>
          
          </div>):
        (
          <div className="flex justify-center items-center flex-col h-[100vh]">
          <h1 className="text-2xl font-bold">Your Cart is Empty !</h1>
          <Link to={"/"}>
          <button className="w-40 h-10 bg-dark-pink text-white mb-12 rounded-lg mt-5">Shop Now</button>
          </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
