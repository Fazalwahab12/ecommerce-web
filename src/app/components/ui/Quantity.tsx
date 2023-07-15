import React from "react";
import { useDispatch } from "react-redux";
import { cartSlice, removeFromCart } from "@/app/store/slice/cartSlice";
import { oneProductType } from "@/app/utils/Type";

interface QuantityProps {
  product: oneProductType;
}

const Quantity: React.FC<QuantityProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = (quantity: number) => {
    dispatch(cartSlice.actions.addToCart({ product, quantity }));
  };

  const handleDecrement = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex items-center gap-x-2">
      <button
        onClick={() => handleDecrement(product._id)}
        className="h-9 w-9 duration-300 border rounded-full hover:shadow-xl flex items-center justify-center"
      >
        -
      </button>
      
      <button
        onClick={() => handleIncrement(1)}
        className="h-9 w-9 duration-300 border rounded-full hover:shadow-xl flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
