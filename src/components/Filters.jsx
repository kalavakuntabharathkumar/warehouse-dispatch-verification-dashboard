import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setDock, setStatus } from "../store";

export default function Filters() {
  const dispatch = useDispatch();
  const { search, dock, status } = useSelector((state) => state.dispatch);
  return <section className="filters" aria-label="Order filters">
    <input aria-label="Search orders" value={search} onChange={(e) => dispatch(setSearch(e.target.value))} placeholder="Search order, customer or dock…" />
    <select aria-label="Filter dock" value={dock} onChange={(e) => dispatch(setDock(e.target.value))}>
      <option>All docks</option><option>Dock A</option><option>Dock B</option><option>Dock C</option>
    </select>
    <select aria-label="Filter status" value={status} onChange={(e) => dispatch(setStatus(e.target.value))}>
      <option>All statuses</option><option>Verified</option><option>Review</option><option>Mismatch</option>
    </select>
  </section>;
}
