"use strict";

// Pure calculation logic, shared between the page (via <script src="calc.js">) and the test suite
// (via require("./calc.js")). No DOM access here on purpose, so it's directly testable.

function fmt(n) {
  return "$" + (Math.round(n * 100) / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function lineAmount(item) {
  return (item.qty || 0) * (item.rate || 0);
}

function computeTotals(items, taxRatePercent) {
  const subtotal = items.reduce((sum, item) => sum + lineAmount(item), 0);
  const taxRate = taxRatePercent || 0;
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { fmt, lineAmount, computeTotals };
}
