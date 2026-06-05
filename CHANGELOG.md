# Changelog

All notable changes to this project should be documented in this file.

## [Unreleased]

### Added
- Community sequence submission wizard
- Submissions tracking dashboard
- Admin and Moderation dashboards
- File System Access API integration
- Client-side mock authentication widget
- Support for `submissions/` and `reviews/` folders

### Refactored
- Externalized sequence database from `index.html` to individual files under `sequences/` folder and registered index mapping in `sequence-index.json` (Phase 0 database refactor)
- Shifted application data loading logic to asynchronously fetch sequence metadata files at startup

### Added
- Registered prefix matching guidance for exact, shifted, and scaled OEIS connections
- Full first-screen prefix matcher section restored ahead of the generator workflow
- Copy and CSV export actions for generated sequences
- Shareable URL hash parameter restoration without automatically generating on page load

### Changed
- Updated `README.md` wording to clarify the sequence matching behavior
- Improved accessibility and animation handling in `index.html`
- Refined prompt guidance in `hiccup_sequence_website_prompt.md` to emphasize prefix matching and result presentation
- Tightened generator control spacing and button sizing for desktop and mobile layouts
- Improved generated step percentages, chart resizing behavior, reference table heading structure, and growth-chart baseline display

### Fixed
- Removed duplicate prefix-matching markup and duplicate static IDs
- Fixed scale matching for registered sequences whose first term is `0`
- Corrected algorithm playback step numbering
- Prevented repeated chart resize observers from accumulating across generated runs
