# TODO List for Hiccup Sequences Database Modifications

## Tasks to Complete

### UI/Visual Modifications
- [x] **Replace action buttons with symbols** - Convert Copy Sequence, Export Sequence (JSON/CSV), Export Chart (PNG) to symbolic buttons (theme toggle size)
- [x] **Add “Provide connection?” button for unmatched sequences** – Replace the “✓ Valid Hiccup Sequence” remark in the green match card with a neutral title, keep the “not in database” sentence, and add a button that opens a submission modal; the modal will create a pre‑filled GitHub Issue for review by moderators. Once approved, the sequence can be added to `seqDatabase` (and persisted in the repository).

### Code Quality
- [x] **Incremental development with testing** – After every two successful UI implementations, test all related UI elements; if any regression, revert to last working commit and retry. Commit and push after each pair of successful implementations.