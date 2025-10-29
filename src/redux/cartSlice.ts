import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../hooks/types";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// ✅ localStorage থেকে শুরু
const savedCart = localStorage.getItem("cart");
const initialState: CartState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 🛒 প্রোডাক্ট কার্টে যোগ করা
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ❌ প্রোডাক্ট রিমুভ করা
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // 🧹 কার্ট ক্লিয়ার করা
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },

    // 🔁 Quantity আপডেট করা
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
