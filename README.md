# Warehouse Dispatch Verification Dashboard

A React + Redux Toolkit dashboard prototype for verifying warehouse dispatch orders across three loading docks.

## Features
- KPI cards for total orders, verified orders, mismatches, and filtered results
- Search by order ID, customer, or dock
- Dock and status filters with pagination
- Verify/reopen order action
- Chart.js stacked dock-status comparison
- Responsive layout and print-friendly report action
- Jest tests for filter selector behavior

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Test and build
```bash
npm test
npm run build
```

## Notes
This is a self-contained demonstration using generated sample data in `src/data/orders.js`; no real warehouse API is connected. The project currently seeds 120 representative orders so the interface remains fast for local review. Replace the data module with a REST API client when connecting a backend.
