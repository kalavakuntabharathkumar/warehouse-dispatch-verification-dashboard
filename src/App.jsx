import React from "react";
import { useSelector } from "react-redux";
import StatCard from "./components/StatCard";
import Filters from "./components/Filters";
import OrdersTable from "./components/OrdersTable";
import DockChart from "./components/DockChart";
import { selectVisibleOrders } from "./selectors";

export default function App() {
  const orders = useSelector((state) => state.dispatch.orders);
  const visible = useSelector(selectVisibleOrders);
  const mismatches = orders.filter((o) => o.status === "Mismatch").length;
  const verified = orders.filter((o) => o.status === "Verified").length;
  return <main className="app-shell">
    <header className="topbar"><div className="brand-mark">WD</div><div className="brand"><strong>WarehouseOps</strong><span>Dispatch verification</span></div><div className="topbar-right"><span className="live-dot"></span> Shift monitoring <div className="avatar">SV</div></div></header>
    <section className="page-intro"><div><div className="eyebrow">OPERATIONS / DISPATCH</div><h1>Dispatch overview</h1><p>Verify order quantities and catch mismatches before departure.</p></div><button className="primary-button" onClick={() => window.print()}>Export / Print report</button></section>
    <section className="stats">
      <StatCard label="Orders today" value={orders.length.toLocaleString()} detail="Across 3 loading docks" />
      <StatCard label="Verified orders" value={verified.toLocaleString()} detail={`${Math.round(verified / orders.length * 100)}% of all orders`} tone="green" />
      <StatCard label="Mismatches" value={mismatches.toLocaleString()} detail="Requires supervisor review" tone="amber" />
      <StatCard label="Filtered results" value={visible.length.toLocaleString()} detail="Based on current filters" tone="purple" />
    </section>
    <div className="content-grid"><OrdersTable /><DockChart /></div>
    <footer className="app-footer">Warehouse Dispatch Verification Dashboard <span>Demo data · Updated for training</span></footer>
  </main>;
}
