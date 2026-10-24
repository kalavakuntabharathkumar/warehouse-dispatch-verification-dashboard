import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function DockChart() {
  const orders = useSelector((state) => state.dispatch.orders);
  const labels = ["Dock A", "Dock B", "Dock C"];
  const data = {
    labels,
    datasets: [
      { label: "Verified", data: labels.map((dock) => orders.filter((o) => o.dock === dock && o.status === "Verified").length), backgroundColor: "#2563eb", borderRadius: 5 },
      { label: "Needs review", data: labels.map((dock) => orders.filter((o) => o.dock === dock && o.status !== "Verified").length), backgroundColor: "#f59e0b", borderRadius: 5 }
    ]
  };
  return <div className="chart-box"><div className="panel-heading"><div><h2>Dock verification</h2><p>Order status by loading dock</p></div></div><Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } }, scales: { y: { beginAtZero: true } } }} /></div>;
}
