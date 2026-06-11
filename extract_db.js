// Helper script to extract embedded database to sequences/
// This is a placeholder - in a real implementation, this would
// extract base64-encoded or embedded JSON data to individual files

console.log("Extract database helper script");
console.log("In a full implementation, this would extract sequence data from embedded sources");

// Example of what this might do:
// 1. Read embedded data (if any)
// 2. Parse JSON
// 3. Write individual sequence files to sequences/
// 4. Update sequence-index.json

// For now, we'll just log that the sequences are already extracted
const fs = require('fs');
const path = require('path');

function extractDatabase() {
  const sequencesDir = path.join(__dirname, 'sequences');
  console.log(`Checking for sequences in ${sequencesDir}`);

  // Check if sequences directory exists and has files
  if (fs.existsSync(sequencesDir)) {
    const files = fs.readdirSync(sequencesDir).filter(f => f.endsWith('.json'));
    console.log(`Found ${files.length} sequence files`);
  } else {
    console.log('Sequences directory not found');
  }
}

// Run if called directly
if (require.main === module) {
  extractDatabase();
}

module.exports = { extractDatabase };