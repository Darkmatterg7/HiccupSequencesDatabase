# Prompt: Hiccup Sequence Explorer Website

## ROLE & CONTEXT

You are a senior full-stack engineer and UI/UX designer building a mathematical
sequence explorer website. The subject is **hiccup sequences** — a family of
self-referential integer sequences introduced by Benoit Cloitre in the OEIS
(On-Line Encyclopedia of Integer Sequences) in 2003, formally studied in the
paper *"On Cloitre's Hiccup Sequences"* by Fokkink and Joshi (The Ramanujan
Journal, 2026, DOI: 10.1007/s11139-025-01305-1).

---

## MATHEMATICAL FOUNDATION (read carefully before writing any code)

### Formal Definition

A **(j, x, y, z)-hiccup sequence** is a strictly increasing sequence of
integers `a(n)` where:

- `j, x ∈ ℤ≥0` (non-negative integers)
- `y, z ∈ ℤ≥1` (positive integers)
- `y ≠ z`

Defined by:

```
a(1) = x

         ┌ a(n−1) + y,   if (n − j) ∈ {a(k) : k < n}
a(n) =   │                                                  for n ≥ 2
         └ a(n−1) + z,   otherwise
```

**Plain English:** Start at `x`. At each step, look back `j` positions
(i.e. check if the number `n − j` has already appeared in the sequence so
far). If it has, add `y`; otherwise add `z`. The difference alternates in a
rhythmic pattern — like bouts of hiccups — hence the name.

### Parameter meanings

| Parameter | Meaning |
|-----------|---------|
| `j` | Lookback offset (0 = check if current index is in sequence; 1 = check if previous index was in sequence) |
| `x` | Starting value (first term) |
| `y` | "Small" gap added when `n−j` IS in the sequence |
| `z` | "Large" gap added when `n−j` is NOT in the sequence |

### Worked Example — A086398: (j=1, x=1, y=4, z=2)

```
a(1) = 1
a(2): check if (2−1)=1 ∈ {a(k): k<2} = {1}. YES → a(2) = 1+4 = 5
a(3): check if (3−1)=2 ∈ {5}. NO → a(3) = 5+2 = 7
a(4): check if (4−1)=3 ∈ {5,7}. NO → a(4) = 7+2 = 9
a(5): check if (5−1)=4 ∈ {5,7,9}. NO → a(5) = 9+2 = 11
a(6): check if (6−1)=5 ∈ {5,7,9,11}. YES → a(6) = 11+4 = 15
```
Sequence: 1, 5, 7, 9, 11, 15, 17, 21, 23, 27, 29, 33, 35, 37, 39, 43, ...

### Known Hiccup Sequences (built-in knowledge base)

The following is the complete database of known hiccup sequences. Each entry
maps `(j, x, y, z)` to an OEIS ID and known properties:

```json
[
  { "oeis": "A004956", "j":0,"x":2,"y":2,"z":1, "name":"Beatty sequence related to sqrt(2)", "beatty": true },
  { "oeis": "A007066", "j":0,"x":1,"y":2,"z":3, "name":"Upper Wythoff sequence + 2 (approx)", "beatty": true, "formula": "floor((n-1)·φ² + 1), φ = golden ratio" },
  { "oeis": "A045412", "j":0,"x":3,"y":1,"z":3, "name":"A045412", "beatty": false },
  { "oeis": "A064437", "j":0,"x":1,"y":3,"z":2, "name":"A064437", "beatty": true, "formula": "floor(1 + (√2)(n−1) + 1/(2+√2))" },
  { "oeis": "A080578", "j":0,"x":1,"y":1,"z":3, "name":"A080578 — morphic but NOT automatic (example 16 of Allouche-Shallit-Yassawi)", "beatty": false },
  { "oeis": "A080579", "j":0,"x":1,"y":1,"z":4, "name":"A080579", "beatty": false },
  { "oeis": "A080580", "j":0,"x":1,"y":2,"z":4, "name":"A080580", "beatty": false },
  { "oeis": "A080590", "j":0,"x":1,"y":3,"z":4, "name":"A080590", "beatty": true },
  { "oeis": "A080600", "j":0,"x":4,"y":4,"z":3, "name":"A080600", "beatty": true },
  { "oeis": "A080652", "j":0,"x":2,"y":3,"z":2, "name":"A080652 (= A086377 + 1)", "beatty": true },
  { "oeis": "A080667", "j":0,"x":3,"y":4,"z":3, "name":"A080667", "beatty": true },
  { "oeis": "A080903", "j":0,"x":1,"y":4,"z":2, "name":"A080903", "beatty": false },
  { "oeis": "A081834", "j":0,"x":1,"y":4,"z":3, "name":"A081834", "beatty": true },
  { "oeis": "A081835", "j":0,"x":1,"y":5,"z":4, "name":"A081835", "beatty": true },
  { "oeis": "A081839", "j":0,"x":0,"y":4,"z":5, "name":"A081839", "beatty": true },
  { "oeis": "A081840", "j":0,"x":0,"y":3,"z":4, "name":"A081840 (= A064437 + 1)", "beatty": true },
  { "oeis": "A081841", "j":0,"x":0,"y":3,"z":2, "name":"A081841", "beatty": true },
  { "oeis": "A081842", "j":0,"x":0,"y":4,"z":3, "name":"A081842", "beatty": true },
  { "oeis": "A081843", "j":0,"x":0,"y":5,"z":4, "name":"A081843", "beatty": true },
  { "oeis": "A086377", "j":1,"x":1,"y":3,"z":2, "name":"A086377 — the BDS sequence (Bosma–Dekking–Steiner)", "beatty": true, "formula": "floor((1+√2)n − √2/2)", "morphism": "0→10, 1→100" },
  { "oeis": "A086398", "j":1,"x":1,"y":4,"z":2, "name":"A086398 (Kimberling's sequence)", "beatty": false, "morphism": "0→10, 1→1000", "note": "All terms odd; Kimberling conjectured −1 < n(1+√3) − a(n) < 4" },
  { "oeis": "A000201", "j":1,"x":1,"y":2,"z":1, "name":"Lower Wythoff sequence", "beatty": true, "formula": "floor(n·φ), φ = golden ratio = (1+√5)/2" },
  { "oeis": "A001950", "j":1,"x":2,"y":2,"z":3, "name":"Upper Wythoff sequence", "beatty": true, "formula": "floor(n·φ²)" },
  { "oeis": "A003156", "j":1,"x":1,"y":3,"z":1, "name":"A003156", "beatty": false },
  { "oeis": "A026352", "j":1,"x":1,"y":2,"z":3, "name":"A026352", "beatty": false },
  { "oeis": "A026356", "j":0,"x":2,"y":2,"z":3, "name":"A026356 (= A007066 except first term)", "beatty": true },
  { "oeis": "A284753", "j":0,"x":2,"y":4,"z":2, "name":"A284753 (= 2 × A026363)", "beatty": false, "note": "Kimberling conjectured −2 < (1+√3)n − a(n) < 3, proved by Fokkink–Joshi 2026" }
]
```

### Hiccup Sequence Validation Algorithm

To check whether an input sequence `[t1, t2, t3, ..., tN]` is a hiccup
sequence, do the following:

1. The sequence must be **strictly increasing** (each term > previous term).
2. Compute the **first differences** `d(n) = t(n) − t(n−1)` for n ≥ 2.
3. The differences must take **exactly two distinct values** — call them
   `y_candidate` and `z_candidate` (both positive integers, y ≠ z).
4. Set `x = t(1)`, then try all values `j ∈ {0, 1, 2, 3}` (in practice
   j=0 and j=1 cover all known cases):
   - For each candidate `j`, simulate the definition:
     - Maintain a growing set `S` of seen terms.
     - For each n from 2 to N: check if `(n − j)` is in `S`, determine
       whether `y` or `z` should be added.
     - If the simulated sequence matches the input exactly → valid hiccup
       with parameters `(j, x, y, z)`.
5. If valid, also check: does `|y − z| = 1`? (Beatty sequence candidate)

### Sequence Matching Algorithm

After generating or validating a sequence, match it against the database:

1. **Exact match**: Compare first N terms with stored sequences (generate
   stored sequence on the fly using definition).
2. **Translate match**: Check if input = known_sequence + constant offset
   (e.g., A081840 = A064437 + 1).
3. **Scale match**: Check if input = k × known_sequence for small integer k.
4. **Parameter match**: If user supplied (j, x, y, z), look up exact
   parameters in the database JSON above.

---

## WEBSITE REQUIREMENTS

### Technology Stack

Build this as a **single-file HTML application** with:
- Vanilla JavaScript (no framework needed — keep it self-contained)
- Embedded CSS with CSS custom properties
- No external API calls required (all logic is client-side)
- Optional: Link to `https://oeis.org/AXXXXXX` for "View on OEIS" buttons

### Visual Design Direction

Theme: **Mathematical elegance meets vintage scientific journal** aesthetic.
- Dark background (`#0d1117` or similar deep navy/charcoal)
- Monospaced font for sequence terms (e.g., `JetBrains Mono`, `Fira Code`,
  or `Courier New` fallback) — load from Google Fonts if possible
- Serif display font for headings (e.g., `Playfair Display` or `EB Garamond`)
- Accent color: warm amber/gold (`#e8a838`) for highlights and matches
- Subtle graph-paper or dot-grid background pattern (pure CSS)
- Smooth CSS transitions on all interactive elements
- Animated sequence term reveal (terms appear one by one with stagger delay)

---

## PAGE STRUCTURE

### Header

- Title: **"Hiccup Sequence Explorer"**
- Subtitle: *"Identify and generate self-referential integer sequences from Cloitre's OEIS family"*
- Small "?" tooltip/button that opens a modal explaining the hiccup sequence
  definition (show the formal definition typeset nicely, the worked example
  from A086398, and a brief note citing Fokkink & Joshi 2026)

---

### Section 1 — "Identify a Sequence"

**Purpose:** User inputs terms of an unknown sequence; system checks if it
is a hiccup sequence and, if so, matches it to the known database.

**UI elements:**

1. **Input field** — large, prominent text input (or textarea) with
   placeholder: `"Enter comma-separated integers, e.g.: 1, 5, 7, 9, 11, 15, 17"`
   - Accept comma-separated or space-separated integers
   - Show a character/term counter: "12 terms entered"
   - Minimum 8 terms required for meaningful validation; show a soft warning
     if fewer than 8 are entered

2. **"Analyse" button** — triggers the full pipeline below

3. **Results panel** (appears below after analysis):

   **Case A — Not a valid hiccup sequence:**
   - Red/amber indicator: "✗ Not a hiccup sequence"
   - Reason: e.g., "Sequence is not strictly increasing" or "Differences take
     more than 2 distinct values (found: 3 distinct gaps: 2, 3, 5)"
   - Tip: show the first difference array so user can inspect it

   **Case B — Valid hiccup sequence, no database match:**
   - Green indicator: "✓ Valid hiccup sequence"
   - Show detected parameters: `j = 0, x = 1, y = 3, z = 2`
   - Show the difference pattern visually (a row of colored blocks — one color
     per gap value, so the rhythm is visible)
   - Message: "This sequence is not in our known database, but it is a valid
     `(0, 1, 3, 2)`-hiccup sequence."
   - Note if `|y−z| = 1`: "Since |y−z| = 1, this may be a Beatty sequence.
     Try searching OEIS."
   - Button: "Generate 30 terms" (auto-populates Section 2 with these params)
   - Button: "Search OEIS ↗" linking to
     `https://oeis.org/search?q=<first6terms>&language=english`

   **Case C — Valid hiccup sequence WITH database match:**
   - Large success card with gold border
   - Sequence name prominently displayed (e.g., "Lower Wythoff Sequence")
   - OEIS ID as a badge (e.g., **A000201**) — clickable, links to OEIS page
   - Parameters: `(j=1, x=1, y=2, z=1)`
   - Description paragraph (from the database — write 2–4 sentences for each
     known sequence covering: what it counts, who discovered it, its
     mathematical significance)
   - If Beatty sequence: show the closed-form formula in a stylized box
   - If has morphism: show the substitution rule
   - "Interesting facts" section (pull from the descriptions below)
   - Button: "View on OEIS ↗"
   - Button: "Generate more terms" (auto-populates Section 2)

---

### Section 2 — "Generate from Parameters"

**Purpose:** User inputs `(j, x, y, z)` parameters; system generates the
first 30 terms and matches against the database.

**UI elements:**

1. **Parameter input grid** — four labeled number inputs side by side:
   ```
   [ j ] [ x ] [ y ] [ z ]
    j≥0   x≥0   y≥1   z≥1
   ```
   - `j`: label "Lookback offset (j)", range 0–5, default 0
   - `x`: label "Starting value (x)", range 0–100, default 1
   - `y`: label "Gap if n−j IN sequence (y)", range 1–20, default 2
   - `z`: label "Gap if n−j NOT in sequence (z)", range 1–20, default 3
   - Inline validation: red border if y = z (show error: "y and z must differ")
   - Show a live constraint reminder: "y ≠ z required"

2. **"Generate Sequence" button**

3. **Generated sequence display:**
   - Show terms 1–30 in a styled, monospaced grid/row
   - Animate terms appearing one by one (stagger 40ms each)
   - Color-code each term by which gap was used to reach it:
     - Amber/gold tint = y-step (n−j was in sequence)
     - Teal/cool tint = z-step (n−j was not in sequence)
   - Below the sequence, show the difference sequence with the same
     two-tone coloring
   - Show a mini "rhythm strip" — a horizontal bar chart of the differences,
     making the hiccup pattern visually clear

4. **Match result panel** (same design as Section 1 Case B/C above):
   - If parameters exactly match a database entry → full info card (Case C)
   - If no match → show Case B panel
   - Additional insight: if j > 0, note "By Lemma 9 (Fokkink–Joshi), this
     is equivalent to the (0, x+j, y, z)-hiccup sequence shifted by j."

---

### Section 3 — "Known Hiccup Sequences" Reference Table

A collapsible/expandable reference table at the bottom of the page showing
all 27 known hiccup sequences from the paper (Tables 1 and 3 combined),
with columns:

| OEIS | j | x | y | z | Name / Notes | Beatty? | Action |
|------|---|---|---|---|--------------|---------|--------|
| A086377 | 1 | 1 | 3 | 2 | BDS sequence | ✓ | [Generate] |
| A000201 | 1 | 1 | 2 | 1 | Lower Wythoff | ✓ | [Generate] |
| ... | | | | | | | |

- "Generate" button pre-fills Section 2 with those parameters
- Clicking the OEIS ID opens the OEIS page in a new tab
- Toggle button to show/hide this table ("Browse all known sequences ▼")

---

### Footer

- Citation: *"Based on: Fokkink, R. & Joshi, G. (2026). On Cloitre's hiccup sequences.
  The Ramanujan Journal, 69:40. DOI: 10.1007/s11139-025-01305-1"*
- Note: *"Sequence database based on OEIS entries by Benoit Cloitre (2003) and others."*
- Link to OEIS: `https://oeis.org`

---

## SEQUENCE DESCRIPTIONS (write these into the JS database)

Use these descriptions for the info cards when a match is found:

**A000201 — Lower Wythoff Sequence**
The positions of the letter 'n' in Wythoff's game — a two-pile Nim variant.
Defined as `floor(n·φ)` where φ = (1+√5)/2 ≈ 1.618 is the golden ratio.
Together with A001950 (Upper Wythoff), it forms a partition of the positive
integers. As a (1,1,2,1)-hiccup sequence it reflects a deep connection
between self-referential definitions and Beatty sequences.

**A001950 — Upper Wythoff Sequence**
The complement of the Lower Wythoff sequence, partitioning the naturals
alongside A000201. Defined as `floor(n·φ²)`. Appears in Wythoff's game
theory and is a (1,2,2,3)-hiccup sequence, generated by the reversal of
the morphism `0 → 010, 1 → 01`.

**A007066 — (0,1,2,3)-hiccup sequence**
Related to the Upper Wythoff sequence: equals A001950 + 2 (except for first
term). Has the closed form `floor((n−1)·φ² + 1)`. Generated by the morphism
`0 → 010, 1 → 10`, the fixed point starting with 1.

**A086377 — The BDS Sequence**
The star of the Bosma–Dekking–Steiner theorem (Integers, 2018). This
(1,1,3,2)-hiccup sequence has four equivalent characterizations: recursive
hiccup definition, positions of 1 in the fixed point of `0→10, 1→100`,
the Beatty sequence `floor((1+√2)n − √2/2)`, and an iterated function
sequence starting from 4/π via Lambert's continued fraction. That a sequence
from π equals a Beatty sequence with slope 1+√2 was verified numerically
over 130,000 terms before being proved.

**A086398 — Kimberling's Sequence**
A (1,1,4,2)-hiccup sequence where all terms are odd. Kimberling conjectured
that `−1 < n(1+√3) − a(n) < 4`. The sequence is the fixed point of
`0 → 10, 1 → 1000` (morphic but not a Beatty sequence). By Lemma 9 of
Fokkink–Joshi, it is a translate of A284753.

**A064437 — (0,1,3,2)-hiccup sequence**
Robert Israel empirically discovered a closed Beatty formula:
`floor(1 + (√2)(n−1) + 1/(2+√2))`. A non-homogeneous Beatty sequence with
slope 1+√2 and a non-trivial offset. A081840 equals this sequence plus one.

**A284753 — (0,2,4,2)-hiccup sequence**
A relatively recent OEIS addition proved to equal 2 × A026363. Fokkink and
Joshi (2026) proved Kimberling's conjecture `−2 < (1+√3)n − a(n) < 3` using
the Walnut automatic theorem prover and a Dumont–Thomas numeration system for
the morphism `0 → 01, 1 → 0001`. Its numeration base satisfies the linear
recurrence Bₙ₊₁ = 2Bₙ + 2Bₙ₋₁.

**A080578 — (0,1,1,3)-hiccup sequence**
Notably, this is a morphic sequence that is NOT k-automatic for any k.
It is Example 16 in the survey by Allouche, Shallit, and Yassawi (2022)
"How to prove that a sequence is not automatic." The generating morphism
is not primitive (its adjacency matrix restricted to {0,1} is not primitive
when y = 1).

---

## IMPLEMENTATION NOTES

### Core Algorithm (implement in JavaScript)

```javascript
// Generate a (j, x, y, z)-hiccup sequence of n terms
function generateHiccup(j, x, y, z, n = 30) {
  const seq = [x];
  const seqSet = new Set([x]);
  const steps = [null]; // steps[i] = 'y' or 'z' for seq[i]

  for (let idx = 1; idx < n; idx++) {
    const n_val = idx + 1; // 1-indexed position
    const check = n_val - j;
    const usesY = seqSet.has(check);
    const next = seq[idx - 1] + (usesY ? y : z);
    seq.push(next);
    seqSet.add(next);
    steps.push(usesY ? 'y' : 'z');
  }
  return { seq, steps };
}

// Validate input sequence as a hiccup sequence
function validateHiccup(inputSeq) {
  if (inputSeq.length < 3) return { valid: false, reason: "Too few terms" };

  // Check strictly increasing
  for (let i = 1; i < inputSeq.length; i++) {
    if (inputSeq[i] <= inputSeq[i-1])
      return { valid: false, reason: "Sequence is not strictly increasing" };
  }

  // Compute differences
  const diffs = [];
  for (let i = 1; i < inputSeq.length; i++)
    diffs.push(inputSeq[i] - inputSeq[i-1]);

  const diffSet = [...new Set(diffs)];
  if (diffSet.length !== 2)
    return {
      valid: false,
      reason: `Differences must take exactly 2 distinct values. Found ${diffSet.length}: [${diffSet.join(', ')}]`
    };

  const [y_cand, z_cand] = diffSet.sort((a,b) => a-b);
  const x_cand = inputSeq[0];

  // Try j = 0, 1, 2, 3
  for (let j = 0; j <= 3; j++) {
    for (const [y, z] of [[y_cand, z_cand], [z_cand, y_cand]]) {
      const { seq } = generateHiccup(j, x_cand, y, z, inputSeq.length);
      if (seq.every((v, i) => v === inputSeq[i])) {
        return { valid: true, j, x: x_cand, y, z };
      }
    }
  }

  return {
    valid: false,
    reason: "Differences take 2 values but no consistent hiccup rule found for j ∈ {0,1,2,3}"
  };
}

// Match parameters against known database
function matchDatabase(j, x, y, z, seq, db) {
  // Exact parameter match
  const exactParam = db.find(e => e.j===j && e.x===x && e.y===y && e.z===z);
  if (exactParam) return exactParam;

  // Sequence-term match (generate each db entry and compare)
  for (const entry of db) {
    const { seq: dbSeq } = generateHiccup(entry.j, entry.x, entry.y, entry.z, seq.length);
    if (dbSeq.every((v, i) => v === seq[i])) return entry;
    // Check offset match (seq = dbSeq + c)
    if (seq.length > 5) {
      const offset = seq[0] - dbSeq[0];
      if (dbSeq.every((v, i) => v + offset === seq[i]))
        return { ...entry, offsetNote: `This sequence = ${entry.oeis} + ${offset}` };
    }
  }
  return null;
}
```

### UI/UX Details to Implement

- **Sequence display**: render each term in a `<span>` with a color class
  (`step-y` = warm amber, `step-z` = cool teal), plus the term index as a
  tiny superscript
- **Difference rhythm strip**: a horizontal flex row of colored pills showing
  the gap pattern, e.g.: `[+3][+2][+2][+3][+2][+3]...` — this makes the
  "hiccup" rhythm immediately visible
- **Info card expand/collapse**: large info cards for matched sequences
  should expand with a smooth CSS height transition
- **Error states**: use inline, context-specific error messages (never
  modal alerts). Red for invalid input, amber for warnings, green for valid
- **Responsive**: works on mobile — stack parameter inputs vertically on
  narrow screens
- **Loading state**: the "Generate" button shows a brief spinner (150ms)
  before results appear, adding perceived quality even though computation
  is instant

### Math Rendering

For mathematical formulas (Beatty formulas, morphisms), use Unicode where
possible:
- `⌊ ⌋` for floor function
- `φ` for golden ratio
- `√2`, `√3`, `√5` inline
- For morphisms: use styled monospace, e.g.: `σ: 0 → 10, 1 → 100`

If you want to include a proper math library, you may embed a minimal
KaTeX snippet for rendering LaTeX, but it is not required.

---

## DELIVERABLE

Produce a single self-contained `index.html` file with all CSS and
JavaScript embedded. The file should:

1. Implement both sections fully with the algorithms above
2. Include the full 27-entry sequence database as a JS object
3. Include rich info cards for at least the 8 most notable sequences:
   A000201, A001950, A007066, A086377, A086398, A064437, A284753, A080578
4. Implement the reference table (Section 3) with all 27 entries
5. Apply the mathematical-journal visual theme described above
6. Be completely functional with no external API dependencies (OEIS links
   open in new tab but are not fetched)
7. Include the definition modal accessible from the "?" button

The result should feel like a polished, production-quality tool that a
mathematician or curious programmer would actually use.
