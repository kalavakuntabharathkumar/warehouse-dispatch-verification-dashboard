import { configureStore, createSlice } from "@reduxjs/toolkit";
import { orders } from "./data/orders";

const dispatchSlice = createSlice({
  name: "dispatch",
  initialState: { orders, search: "", dock: "All docks", status: "All statuses", page: 1, pageSize: 10 },
  reducers: {
    setSearch(state, action) { state.search = action.payload; state.page = 1; },
    setDock(state, action) { state.dock = action.payload; state.page = 1; },
    setStatus(state, action) { state.status = action.payload; state.page = 1; },
    setPage(state, action) { state.page = action.payload; },
    toggleVerified(state, action) {
      const order = state.orders.find((item) => item.id === action.payload);
      if (order) order.status = order.status === "Verified" ? "Review" : "Verified";
    }
  }
});

export const { setSearch, setDock, setStatus, setPage, toggleVerified } = dispatchSlice.actions;
export const store = configureStore({ reducer: { dispatch: dispatchSlice.reducer } });
