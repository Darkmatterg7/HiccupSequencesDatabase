# Hiccup Sequence Explorer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://darkmatterg7.github.io/HiccupSequencesDatabase/)

An interactive, single‑file web tool for matching and generating **hiccup sequences** — a family of self‑referential integer sequences from Cloitre's OEIS collection, formally solved by Fokkink and Joshi (2026).

---

## What is a Hiccup Sequence?

A **(j, x, y, z)-hiccup sequence** is a strictly increasing sequence of integers `a(n)` defined by:

```
a(1) = x

        ┌ a(n−1) + y,   if (n − j) ∈ {a(k) : k < n}
a(n) =  │                                                  for n ≥ 2
        └ a(n−1) + z,   otherwise
```

| Parameter | Meaning |
|-----------|---------|
| `j`       | Lookback offset (0 = check current index; 1 = check previous index) |
| `x`       | Starting value — first term of the sequence |
| `y`       | Gap added when `n−j` is in the sequence |
| `z`       | Gap added when `n−j` is **not** in the sequence |

**Constraints:** `j, x ∈ ℤ≥0`, `y, z ∈ ℤ≥1`, `y ≠ z`.

---

## Features

- **Match a sequence prefix** – paste prefix terms and the tool lists every registered OEIS connection (exact parameter matches, termwise shifted‑by‑addition, scaled matches). Works even if the prefix is not a standalone hiccup sequence.
- **Generate a sequence** – enter parameters `(j, x, y, z)` and generate the first 50 terms with an animated stagger reveal, copy/export actions, and a compact responsive control row.
- **Difference rhythm strip** – visualises the gap pattern as a row of colour‑coded pills, making the hiccup rhythm immediately visible.
- **Mathematical analysis chart** – interactive canvas plot with two modes:
  - **Growth Trend** (convergence ratio `a(n)/n`)
  - **Sturmian Residuals** (deviation from the linear slope)
- **Database of 27 sequences** – covers all known hiccup sequences (Lower/Upper Wythoff, BDS sequence, Kimberling's sequence, etc.), each with OEIS links and rich info cards.
- **Lemma 9 equivalence** – automatically notes when a `j > 0` sequence is equivalent to a translated `j = 0` sequence (Fokkink–Joshi 2026).
- **Shareable parameters** – generated parameter sets update the URL hash; opening a hash‑prefilled page restores inputs without auto‑running generation.
- **Submission & moderation workflow** – mock user switcher, submission wizard, tracking, and moderation dashboard (data saved via File System Access API or falls back to `localStorage`).

---

## Getting Started

No build step or dependencies required.

### 1. Open directly

```bash
git clone https://github.com/Darkmatterg7/HiccupSequencesDatabase.git
cd HiccupSequencesDatabase
open index.html   # or double‑click the file
```

### 2. Serve locally (recommended for full functionality)

```bash
# Using npx
npx serve .

# Or Python
python -m http.server 8000
```

Then visit `http://localhost:8000` (or the port shown).

---

## Project Structure

```
HiccupSequencesDatabase/
├── index.html                 # Main application — HTML, CSS, and JS in one file
├── sequence-index.json        # Registry mapping OEIS IDs → JSON files
├── sequences/                 # Individual JSON files for each of the 27 sequences
│   ├── A000201.json
│   └── ...
├── submissions/               # Folder for community sequence submissions (JSON)
├── reviews/                   # Folder for reviewer review records (JSON)
├── extract_db.js              # Helper script to extract embedded DB to sequences/
├── hiccup_sequence_website_prompt.md  # Product and implementation specification
├── README.md                  # This file
├── CHANGELOG.md               # Release notes and pending changes
└── CONTRIBUTING.md            # Lightweight GitHub workflow guide
```

---

## Community Submissions & Moderation

The explorer includes a fully integrated contribution workflow:

1. **User Sign‑In / Switcher** – swap profiles (Regular User, Reviewer, Administrator) to test the flow.
2. **Submission Wizard** – 4‑step wizard:
   - *Parameters*: Set `j`, `x`, `y`, `z`; preview terms with duplicate‑sequence warning.
   - *Metadata*: Title, description, references, notes.
   - *Mathematical Connections*: Formulas, morphisms, Sturmian slope deviations, Beatty attributes.
   - *Review & Submit*: Final validation before submitting.
3. **Submission Tracking** – view your submissions and their statuses (`draft`, `pending_review`, `changes_requested`, `approved`, `rejected`, `published`). Edit and resubmit if changes are requested.
4. **Moderation Dashboard** – reviewers/administrators can approve, reject, or request changes on pending submissions.
5. **Local Workspace Storage** – administrators can grant **File System Access API** permissions; then submissions go to `submissions/`, reviews to `reviews/`, and approved publications write directly to `sequences/` while updating `sequence-index.json`. Without connection, data falls back to `localStorage` and copy‑pasteable JSON is provided.

---

## Technical Details

- **Core logic**: Pure vanilla JavaScript — no frameworks.
- **Styling**: Embedded CSS with custom properties for a dark, journal‑like theme.
- **Visualization**: Canvas API for the interactive analysis chart.
- **Fonts**: EB Garamond, Inter, JetBrains Mono (via Google Fonts).
- **No build tools**, no dependencies, no external API calls.

---

## Reference

Fokkink, R. & Joshi, G. (2026). *On Cloitre's hiccup sequences.* The Ramanujan Journal, 69:40.  
DOI: [10.1007/s11139-025-01305-1](https://doi.org/10.1007/s11139-025-01305-1)

Sequence data sourced from the [On‑Line Encyclopedia of Integer Sequences (OEIS)](https://oeis.org), with original entries by Benoit Cloitre (2003) and others.

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## Live Demo

Once GitHub Pages is enabled for the repository, the live demo will be available at:  
**https://darkmatterg7.github.io/HiccupSequencesDatabase/**

---

## Contributing

Feel free to open issues or submit pull requests. For major changes, please discuss them first in an issue.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

--- 

*Made with ❤️ for the integer‑sequence community.*