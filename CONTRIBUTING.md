# GitHub Workflow Guide

This repository uses a lightweight, GitHub-friendly workflow optimized for small feature-driven updates, clear history, and version-highlighted summaries.

## Branch Naming

Use descriptive branches with one of these prefixes:

- `feature/<short-description>` for new features or enhancements
- `fix/<short-description>` for bug fixes
- `docs/<short-description>` for documentation updates
- `style/<short-description>` for formatting or accessibility-only changes
- `chore/<short-description>` for maintenance, cleanup, or dependency updates

Examples:
- `feature/registered-prefix-matcher`
- `fix/button-accessibility-outline`
- `docs/workflow-and-commit-guidelines`

## Commit Messages

Use structured commit messages in the style:

```
<type>(<scope>): <short summary>

<body>

- <bullet detail 1>
- <bullet detail 2>
```

Common `type` values:
- `feat`: new feature or enhancement
- `fix`: bug fix
- `docs`: documentation only
- `style`: formatting, layout, or accessibility improvements
- `refactor`: code restructuring without behavior change
- `chore`: repository maintenance

Example:

```
feat(matcher): improve registered prefix matching and display logic

- show exact, shifted, and scaled OEIS matches equally
- keep detected parameters visible when applicable
- retain registered prefix matches even if the prefix is not a standalone hiccup sequence
```

## Pull Requests

Every PR should include:

1. A short title that matches the branch intent
2. A summary of the change
3. A short list of significant updates
4. A note when the PR includes cross-file changes

Example PR description:

- Added support for registered prefix matching in `hiccup_sequence_website_prompt.md`
- Improved accessibility styling and animation handling in `index.html`
- Refined README wording for sequence matching behavior

## Version-Highlighted Summaries

Maintain a changelog-style summary for each update.

- Use `CHANGELOG.md` for visible update notes
- Keep the latest changes under `## [Unreleased]`
- For each release or major update, add a dated section with bullets

Example entry:

```
## [Unreleased]
### Added
- Registered prefix matching rules for exact, shifted, and scaled OEIS connections

### Changed
- README wording updated for sequence matching descriptions
- Accessibility improvements for button focus states and reduced-motion handling
```

## Recommended Workflow

1. Create a branch for the work:
   - `git checkout -b feature/registered-prefix-matcher`
2. Make targeted edits
3. Stage only the files involved:
   - `git add README.md hiccup_sequence_website_prompt.md index.html`
4. Commit with a structured message
5. Push the branch:
   - `git push origin feature/registered-prefix-matcher`
6. Open a PR on GitHub and link to any issue or future release plan

## Notes for this repository

- Keep all major behavioral changes clearly documented in `hiccup_sequence_website_prompt.md`
- Treat `index.html` edits as UI/UX updates and `README.md` edits as user-facing documentation
- Use `CHANGELOG.md` to track meaningful updates over time
