"use strict";

const test = require("node:test");
const assert = require("node:assert");
const { fmt, lineAmount, computeTotals } = require("../calc.js");

test("fmt formats cents correctly and rounds", () => {
  assert.strictEqual(fmt(1234.5), "$1,234.50");
  assert.strictEqual(fmt(0), "$0.00");
  assert.strictEqual(fmt(9.999), "$10.00");
});

test("lineAmount multiplies qty by rate, treating missing values as 0", () => {
  assert.strictEqual(lineAmount({ qty: 3, rate: 25 }), 75);
  assert.strictEqual(lineAmount({ qty: 0, rate: 25 }), 0);
  assert.strictEqual(lineAmount({ rate: 25 }), 0);
  assert.strictEqual(lineAmount({ qty: 3 }), 0);
});

test("computeTotals sums line items and applies tax correctly", () => {
  const items = [{ qty: 10, rate: 50 }, { qty: 2, rate: 25 }];
  const { subtotal, tax, total } = computeTotals(items, 10);
  assert.strictEqual(subtotal, 550);
  assert.strictEqual(tax, 55);
  assert.strictEqual(total, 605);
});

test("computeTotals with zero tax rate", () => {
  const items = [{ qty: 1, rate: 100 }];
  const { total } = computeTotals(items, 0);
  assert.strictEqual(total, 100);
});

test("computeTotals with no items", () => {
  const { subtotal, total } = computeTotals([], 20);
  assert.strictEqual(subtotal, 0);
  assert.strictEqual(total, 0);
});
