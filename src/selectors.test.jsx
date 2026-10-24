import { selectVisibleOrders } from "./selectors";

const state = { dispatch: {
  orders: [
    { id: "WD-1", customer: "Northstar", dock: "Dock A", status: "Mismatch" },
    { id: "WD-2", customer: "Metro Supply", dock: "Dock B", status: "Verified" }
  ],
  search: "", dock: "All docks", status: "All statuses"
}};

test("returns every order when filters are clear", () => {
  expect(selectVisibleOrders(state)).toHaveLength(2);
});

test("filters by dock and status", () => {
  const filtered = selectVisibleOrders({ dispatch: { ...state.dispatch, dock: "Dock B", status: "Verified" } });
  expect(filtered.map((order) => order.id)).toEqual(["WD-2"]);
});

test("search is case-insensitive", () => {
  const filtered = selectVisibleOrders({ dispatch: { ...state.dispatch, search: "north" } });
  expect(filtered.map((order) => order.id)).toEqual(["WD-1"]);
});
