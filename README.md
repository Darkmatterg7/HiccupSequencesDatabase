# HiccupSequencesDatabase

# Hiccup Sequence Explorer

An interactive, single-file web tool for matching and generating **hiccup sequences** — a family of self-referential integer sequences from Cloitre's OEIS collection, formally studied by Fokkink and Joshi (2026).

## What is a Hiccup Sequence?

A **(j, x, y, z)-hiccup sequence** is a strictly increasing sequence of integers `a(n)` defined by:

```
a(1) = x

         ┌ a(n−1) + y,   if (n − j) ∈ {a(k) : k < n}
a(n) =   │                                                  for n ≥ 2
         └ a(n−1) + z,   otherwise
```

| Parameter | Meaning |
|-----------|---------|
| `j` | Lookback offset (0 = check current index; 1 = check previous index) |
| `x` | Starting value — first term of the sequence |
| `y` | Gap added when `n−j` is in the sequence |
| `z` | Gap added when `n−j` is not in the sequence |

Constraints: `j, x ∈ ℤ≥0`, `y, z ∈ ℤ≥1`, `y ≠ z`.

## Features

- **Match a sequence prefix** — paste prefix terms and the tool lists every registered OEIS connection with equal weight, including exact parameter matches, termwise shifted-by-addition matches, and scaled matches; this registered-prefix checker still runs even if the entered prefix is not itself a standalone hiccup sequence
- **Generate a sequence** — enter parameters `(j, x, y, z)` and generate the first 50 terms with an animated stagger reveal, copy/export actions, and a compact responsive control row
- **Difference rhythm strip** — visualises the gap pattern as a row of colour-coded pills, making the hiccup rhythm immediately visible
- **Mathematical analysis chart** — interactive canvas plot with two modes: Growth Trend (convergence ratio `a(n)/n`) and Sturmian Residuals (deviation from the linear slope)
- **Database of 27 sequences** — covers all known hiccup sequences including the Lower/Upper Wythoff sequences, the BDS sequence, Kimberling's sequence, and more, each with OEIS links and rich info cards
- **Lemma 9 equivalence** — automatically notes when a `j > 0` sequence is equivalent to a translated `j = 0` sequence (Fokkink–Joshi 2026)
- **Shareable parameters** — generated parameter sets update the URL hash, and opening a hash-prefilled page restores the inputs without auto-running generation

## Getting Started

No build step or dependencies required. Just open the file:

```bash
git clone https://github.com/Darkmatterg7/HiccupSequencesDatabase.git
cd HiccupSequencesDatabase
open index.html
```

Or serve it locally:

```bash
npx serve .
# or
python -m http.server 8000
```

## Project Structure

```
HiccupSequencesDatabase/
├── index.html                         # Entire application — HTML, CSS, and JS in one file
├── hiccup_sequence_website_prompt.md  # Product and implementation prompt/specification
├── README.md                          # User-facing project overview
├── CHANGELOG.md                       # Release notes and pending changes
└── CONTRIBUTING.md                    # Lightweight GitHub workflow guide
```

All logic is client-side. There are no external API calls; OEIS links open in a new tab but nothing is fetched at runtime.

## Sequence Database

The tool includes a built-in database of 27 known hiccup sequences:

| OEIS | j | x | y | z | Notable property |
|------|---|---|---|---|-----------------|
| A000201 | 1 | 1 | 2 | 1 | Lower Wythoff sequence — `⌊n·φ⌋` |
| A001950 | 1 | 2 | 2 | 3 | Upper Wythoff sequence — `⌊n·φ²⌋` |
| A086377 | 1 | 1 | 3 | 2 | BDS sequence — `⌊(1+√2)n − √2/2⌋` |
| A086398 | 1 | 1 | 4 | 2 | Kimberling's sequence — all terms odd |
| A064437 | 0 | 1 | 3 | 2 | Beatty sequence with slope 1+√2 |
| A284753 | 0 | 2 | 4 | 2 | Proved = 2 × A026363 (Fokkink–Joshi 2026) |
| A080578 | 0 | 1 | 1 | 3 | Morphic but not k-automatic for any k |
| … | | | | | 20 further entries |

## Tech Stack

- Vanilla JavaScript — no framework
- Embedded CSS with custom properties
- Canvas API for the analysis chart
- Google Fonts (EB Garamond, Inter, JetBrains Mono)
- No build tools, no dependencies

## Reference

Fokkink, R. & Joshi, G. (2026). *On Cloitre's hiccup sequences.* The Ramanujan Journal, 69:40.
DOI: [10.1007/s11139-025-01305-1](https://doi.org/10.1007/s11139-025-01305-1)

Sequence data sourced from the [On-Line Encyclopedia of Integer Sequences (OEIS)](https://oeis.org), with original entries by Benoit Cloitre (2003) and others.

## License

MIT
