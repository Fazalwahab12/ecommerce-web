import React from "react";
import { useDispatch } from "react-redux";
import { cartSlice } from "@/app/store/slice/cartSlice";
import toast from "react-hot-toast";
import { oneProductType } from "@/app/utils/Type";
import { useUser } from '@clerk/nextjs';

interface AddToCartProps {
  product: oneProductType;  
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useUser();

  const addItemToCart = (quantity: number) => {
    if (!user) {
      toast.error("Please sign up first");
      // You can redirect the user to the sign-up page here if needed
    } else {
      dispatch(cartSlice.actions.addToCart({ product, quantity }));
      toast.success("Product added to cart");
    }
  };

  return (
    <button onClick={() => addItemToCart(1)} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

export default AddToCart;


