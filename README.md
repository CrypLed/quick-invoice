# QuickInvoice

A free, no-signup invoice generator that runs entirely in your browser. Fill it in, hit "Save as PDF", done.

**Try it: https://crypled.github.io/quick-invoice/**

## Why

Most free invoice generators either require an account, watermark the PDF unless you pay, or quietly track
what you type. QuickInvoice does none of that — it's a single static HTML page with no backend. Your data is
saved only in `localStorage` on your own machine (so a refresh doesn't lose your draft) and is never sent
anywhere, ever. There's nothing to sign up for because there's no server to sign up to.

## Features

- Business + client details, line items with automatic totals, tax %, notes/payment terms
- "Save as PDF" via the browser's native print dialog — no PDF library, no dependency
- Draft auto-saves to `localStorage` as you type
- Works fully offline once the page has loaded once
- Zero dependencies, zero tracking, ~350 lines you can read in five minutes

## Run it locally

It's basically one file (plus `calc.js`, the totals math, kept separate so it's actually testable). Open
`index.html` in any browser, or serve the folder with anything static:

```bash
npx serve .
```

## Tests

The calculation logic (line totals, tax, subtotal) has a real test suite — CI runs it on Node 18/20/22:

```bash
npm test
```

## Support this project

Free, no strings attached. If it saved you time, tips are welcome via USDC/ETH on Base, Ethereum, Polygon,
Arbitrum, or Optimism (same address on all):

```
0x36CCCB5854e1d513A2Af94CeaFC0f886102634e2
```

## License

MIT
