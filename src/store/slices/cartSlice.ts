import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight } from "../../types/flight";

type CartItem = { flight: Flight; quantity: number };
type CartState = { items: CartItem[] };
const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFlight: (state, action: PayloadAction<Flight>) => {
      const exists = state.items.find((i) => i.flight.id === action.payload.id);
      if (!exists) state.items.push({ flight: action.payload, quantity: 1 });
    },
    removeFlight: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.flight.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addFlight, removeFlight, clearCart } = cartSlice.actions;
export default cartSlice.reducer;