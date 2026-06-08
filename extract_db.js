/**
 * Extract the hiccup sequence database from index.html and save as individual JSON files.
 * Run with: node extract_db.js
 */

const fs = require('fs');
const path = require('path');

// Read the index.html file
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Find the seqDatabase array
const match = indexContent.match(/const seqDatabase = \[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not find seqDatabase in index.html');
  process.exit(1);
}

const databaseText = match[1];
// We'll evaluate the array in a safe way? Since we trust the source, we can use Function.
// But note: the array contains objects with functions? No, it's just data.
// We can wrap it in [] and use JSON.parse after converting to JSON? It's already JS objects.

// Instead, we can use a simple regex to split by '},' but that's error-prone.
// Better to use a JavaScript parser? We'll assume the format is consistent and use a ternary approach.

// Let's extract the array by evaluating it in a function.
// We'll create a wrapper function that returns the array.
const databaseFn = new Function(`return [${databaseText}];`);
const seqDatabase = databaseFn();

// Ensure sequences directory exists
const sequencesDir = path.join(__dirname, 'sequences');
if (!fs.existsSync(sequencesDir)) {
  fs.mkdirSync(sequencesDir, { recursive: true });
}

// Clear existing files? We'll overwrite.
const files = fs.readdirSync(sequencesDir);
for (const file of files) {
  fs.unlinkSync(path.join(sequencesDir, file));
}

// Write each sequence to a JSON file
seqDatabase.forEach(entry => {
  const fileName = `${entry.oeis}.json`;
  const filePath = path.join(sequencesDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(entry, null, 2));
  console.log(`Written ${filePath}`);
});

// Also update the sequence-index.json (registry)
const index = {};
seqDatabase.forEach(entry => {
  index[entry.oeis] = `${entry.oeis}.json`;
});
const indexPath = path.join(__dirname, 'sequence-index.json');
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
console.log(`Updated ${indexPath}`);

console.log('Database extraction complete.');
