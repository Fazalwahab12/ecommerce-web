
'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import getStipePromise from "../../../../sanity/lib/stripy";


const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  const product = cartItems.map((item) => ({
    product: item._id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  }));

  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(product),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5">
      <button
        className="bg-green-500 py-3 px-3 rounded-md w-10"
        onClick={handleCheckout}
      >
        Check out
      </button>
    </div>
  );
};

export default Checkout;
