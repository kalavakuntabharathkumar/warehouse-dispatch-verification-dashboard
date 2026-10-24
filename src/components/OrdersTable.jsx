import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, toggleVerified } from "../store";
import { selectVisibleOrders } from "../selectors";

export default function OrdersTable() {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisibleOrders);
  const { page, pageSize } = useSelector((state) => state.dispatch);
  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const currentPage = Math.min(page, pages);
  const pageRows = visible.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return <section className="panel">
    <div className="panel-heading"><div><h2>Dispatch orders</h2><p>Review scanned quantities before a shipment leaves the dock.</p></div><span className="count">{visible.length} orders</span></div>
    <div className="table-wrap"><table><thead><tr><th>Order</th><th>Customer</th><th>Dock</th><th>Items</th><th>Expected</th><th>Scanned</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>{pageRows.map((order) => <tr key={order.id}>
        <td className="order-id">{order.id}</td><td>{order.customer}</td><td>{order.dock}</td><td>{order.items}</td><td>{order.expected}</td><td>{order.scanned}</td>
        <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
        <td><button className="text-button" onClick={() => dispatch(toggleVerified(order.id))}>{order.status === "Verified" ? "Reopen" : "Verify"}</button></td>
      </tr>)}</tbody>
    </table>{pageRows.length === 0 && <p className="empty">No orders match these filters.</p>}</div>
    <footer className="pagination"><span>Page {currentPage} of {pages}</span><div><button disabled={currentPage <= 1} onClick={() => dispatch(setPage(currentPage - 1))}>Previous</button><button disabled={currentPage >= pages} onClick={() => dispatch(setPage(currentPage + 1))}>Next</button></div></footer>
  </section>;
}
