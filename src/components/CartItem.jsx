import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item ,itemindex}) => {
  const dispatch=useDispatch();
  const removecart =() =>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return(
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-7 p-4 mt-10 ml-5 h-52 rounded-xl w-[800px] "> 

      <div className="flex items-center">

        <div>
          <img src={item.image} className="h-[130px]"/>
        </div>
        <div className="pl-6 ">
        <div>
          <h1 className="text-gray-700 font-semibold ">{item.title}</h1>
          <h1 className="text-gray-400 font-normal mt-4">{item.description.split("").slice(0,100).join("") +"..."}</h1>
        </div>

        <div className="flex justify-between mt-10">
        <div>
          <p className="text-black text-xl">${item.price}</p>
        </div>
        <div className="text-2xl text-red-800 mr-6" onClick={removecart}>
        <RiDeleteBinFill />
        </div>
        </div>
        
        </div>
      </div>

    </div>
  )
};

export default CartItem;
