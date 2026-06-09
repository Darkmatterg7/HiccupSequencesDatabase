# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-06-10
### Fixed
- Critical JavaScript syntax error in loadSubmissionTrackingData function that prevented all JavaScript from executing
- Buttons and QR code lightbox functionality restored by correcting template literal backtick placement
### Added
- iPhone alarm‑clock‑style vertical stepper buttons (▲/▼) for j, x, y, z parameters in the Generator section.
- Parameter ranges increased to 0–50 for all inputs.
- Fallback clipboard implementation using temporary textarea for environments without Clipboard API.
- Keyboard shortcuts: Ctrl/Cmd+Enter to match prefix, Ctrl/Cmd+G to generate sequence.
- URL hash loading now correctly handles zero values (uses explicit null checks).
- Plotting code guarded against division‑by‑zero when sequence length < 2.
- OEIS search prefix length increased from 6 to 12 terms to reduce false matches.
- Computer Modern Typewriter font applied to the header sentence.
- Header sentence punctuation changed to end with a period and removed hyperlink (Fokkink & Joshi reference kept elsewhere).
### Fixed
- Variable name conflict in extract_db.js (indexPath → seqIndexPath) and missing sequences/ prefix in written paths.
- Duplicate fadeInUp animation keyframes removed.
- Unused CSS utilities (.mr-2, .mt-4, .mb-2) and unused variables removed.
- Unused .playback-status class removed.
- aria-labels and focus outlines added to stepper buttons for accessibility.
- Function adjustParam added to handle stepper button logic.
- Various dead code removal and cleanup (unused CSS, duplicate animations).
### Performance
- Caching of generated database sequences in findDatabaseMatches to avoid recomputation.
- Sparkline data cached per canvas element.
- Table filtering now toggles row visibility instead of rebuilding tbody on each change.
- Debounced rapid input events and used requestAnimationFrame for resize observer chart redraw.
- Lazy loading of sequence JSON files on demand, with caching.
### Architecture
- Embedded seqDatabase removed; now loads sequence-index.json and fetches individual sequence JSON files as needed.
- Header counters and "Browse all known hiccup sequences" label now computed dynamically from loaded database.
- Centralized sequence generation: all code paths use the single generateHiccup function.
- Split large runGenerator function into smaller helper functions (buildTermsGrid, buildRhythmStrip, etc.).
### Database Consistency
- Added missing formula fields to several sequence JSON files where derivable.
- Verified beatty flags match |y−z|=1 rule (with noted exceptions).
- Ensured every sequence entry has a non‑empty description.
- Removed duplicate metadata and corrected inconsistent fields.