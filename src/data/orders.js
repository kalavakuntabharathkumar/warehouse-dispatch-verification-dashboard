const docks = ["Dock A", "Dock B", "Dock C"];
const statuses = ["Verified", "Review", "Mismatch"];

export const orders = Array.from({ length: 120 }, (_, i) => {
  const mismatch = i % 11 === 0 || i % 17 === 0;
  return {
    id: `WD-${String(1001 + i).padStart(4, "0")}`,
    dock: docks[i % docks.length],
    customer: ["Northstar Retail", "Metro Supply", "Pioneer Foods", "BluePeak Stores"][i % 4],
    items: 2 + (i % 14),
    expected: 40 + ((i * 7) % 180),
    scanned: mismatch ? 39 + ((i * 7) % 180) : 40 + ((i * 7) % 180),
    status: mismatch ? "Mismatch" : statuses[(i % 9 === 0) ? 1 : 0],
    shift: i % 2 ? "Evening" : "Morning",
    updated: `2026-10-${String((i % 24) + 1).padStart(2, "0")}`
  };
});
