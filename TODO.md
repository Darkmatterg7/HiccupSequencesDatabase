# Hiccup Sequences Database - Legacy Feature Integration TODO

## Goal: Lift aesthetics and features from legacy_index.html to index.html

## Current Status
- Legacy file: legacy_index.html (156,994 bytes)
- Current file: index.html (17,952 bytes) 
- Need to transfer: CSS styling, fonts, color scheme, UI components, interactive features

## TODO Items

### Phase 1: Analysis & Planning
- [x] Analyze legacy_index.html for CSS/styling features
- [x] Analyze legacy_index.html for JavaScript functionality
- [x] Analyze legacy_index.html for UI component structure
- [x] Identify which features to prioritize for transfer

### Phase 2: Styling & Aesthetics
- [x] Extract CSS variables/design tokens from legacy
- [x] Import Google Fonts declarations (EB Garamond, Inter, JetBrains Mono, CMU Typewriter Text)
- [x] Apply color scheme: --bg: #0b0e14, --accent: #e8a838, etc.
- [x] Import typography settings
- [x] Import layout and spacing conventions
- [x] Import card, button, input styles

### Phase 3: Features & Functionality
- [x] Identify interactive components (tabs, modals, forms, etc.)
- [x] Extract JavaScript functionality for sequence generation/matching
- [x] Extract Chart.js configuration if present
- [x] Extract user profile/switcher functionality
- [x] Extract submission workflow UI
- [ ] Extract moderation dashboard UI

### Phase 4: Implementation & Testing
- [ ] Apply styling changes to index.html in chunks
- [ ] Test visual appearance after each chunk
- [ ] Implement JavaScript features in chunks
- [ ] Test functionality after each implementation
- [ ] Verify responsive design works
- [ ] Ensure all existing functionality remains intact

## Notes
- Work in small chunks as requested
- Get approval before importing each major feature
- Do not copy verbatim - adapt features virtually
- Maintain backward compatibility with existing sequence data