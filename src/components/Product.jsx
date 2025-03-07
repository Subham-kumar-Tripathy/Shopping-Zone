import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";


const Product = ({post}) => {
  const {cart}=useSelector((state) => state);
  const dispatch=useDispatch();

  const addhandler =() =>{
    dispatch(add(post));
    toast.success("item added sucessfully");
  }
  
  const removehandler =() =>{
    dispatch(remove(post.id));
    toast.error("item removed sucessfully");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left ">{post.title}</p>
      </div>
      <div>
        <p className=" text-gray-400 font-normal text-left text-[10px]">{post.description.split("").slice(0,100).join("") +"..."}</p>
      </div>
      <div className="h-[180px]">
      <img src={post.image} alt={post.title} className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
      <div>
       <p className="text-black font-semibold">${post.price}</p>
      </div>

      {
         Array.isArray(cart) && cart.some((p) => p.id === post.id) ? 
         (<button
          className="text-white border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase bg-dark-pink
          hover:bg-pink-500 hover:text-black transition duration-300 ease-in"
          onClick={removehandler}>
            Remove Item
          </button>
        ):
        (
          <button
           className="text-white border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase bg-dark-pink
          hover:bg-pink-500 hover:text-black transition duration-300 ease-in"
           onClick={addhandler}>
            Add To Cart
          </button>
        )
      }
      </div>
      
    </div>
  );
};

export default Product;
