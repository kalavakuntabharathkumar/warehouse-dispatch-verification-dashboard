export function selectVisibleOrders(state) {
  const { orders, search, dock, status } = state.dispatch;
  const term = search.trim().toLowerCase();
  return orders.filter((order) => {
    const matchesSearch = !term || [order.id, order.customer, order.dock].some((value) => value.toLowerCase().includes(term));
    return matchesSearch && (dock === "All docks" || order.dock === dock) &&
      (status === "All statuses" || order.status === status);
  });
}
