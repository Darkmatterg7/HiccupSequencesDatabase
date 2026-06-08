content = open('index.html').read()
# We are targeting the specific error string used when a sequence fails to load.
target = "Failed to load sequence database: ${escapeHtml(String(err.message || err))}"
replacement = "(window.location.protocol === 'file:' ? 'The catalogue was opened directly from the filesystem. Sequence data cannot be loaded this way. Start a local server (for example: python -m http.server 8000 or npx serve .) and open the provided localhost URL.' : 'Failed to load sequence database: ${escapeHtml(String(err.message || err))}')"

content = content.replace(target, replacement)
with open('index.html', 'w') as f:
    f.write(content)
