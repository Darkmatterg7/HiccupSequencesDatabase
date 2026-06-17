# TODO List for Hiccup Sequences Database Modifications

## Tasks to Complete

### UI/Visual Modifications
- [x] **Improve question mark symbol** - Made the question mark to the left of 'Identify a sequence' look better (replaced weird SVG with clean styled "?")
- [x] **Fix browse table toggle symbol** - Replace symbol left of 'Browse all known hiccup sequences' with magnifying glass (🔍) and move down arrow (▼) to right for dropdown indicator
- [x] **Remove redundant buttons** - Remove Refresh Chart button (duplicates Generate Sequence) and Reset Form button (manual input replacement sufficient)
- [x] **Replace action buttons with symbols** - Convert Copy Sequence, Export Sequence (JSON/CSV), Export Chart (PNG) to symbolic buttons (theme toggle size) - **PENDING SYMBOL APPROVAL**
- [x] **Add hover tooltips** - Implement hover tooltips for all buttons showing their function (similar to info button's "Information about Hiccup Sequences")

### Code Quality
- [x] **Verify no regression** - Ensure all existing functionality works after changes
- [x] **Test both themes** - Verify changes work in both light and dark modes
- [x] **Test plot modes** - Confirm growth and residual modes work correctly