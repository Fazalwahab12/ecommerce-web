
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { oneProductType } from "@/app/utils/Type";

interface CartState {
  items: oneProductType[];
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: any;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product: oneProductType; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      state.totalQuantity += action.payload.quantity;
      state.totalAmount +=
        action.payload.quantity * action.payload.product.price;

      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice +=
          existingItem.price * action.payload.quantity;
      }
    },

    removeProduct(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item._id !== productId);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item._id !== productId);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const selectIsLoading = (state: RootState) => state.cartSlice;

export const { addToCart, removeProduct, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
