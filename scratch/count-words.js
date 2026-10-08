const fs = require('fs');

const raw = fs.readFileSync('data/blogs.ts', 'utf8');

// Match each blog object
const blogPattern = /id:\s*"([^"]+)",\s*slug:\s*"([^"]+)"[\s\S]*?content:\s*`([\s\S]*?)`\s*\},?\s*(?=\{|\/\/|\n\s*\])/g;

let match;
const results = [];
while ((match = blogPattern.exec(raw)) !== null) {
  const id = match[1];
  const slug = match[2];
  const html = match[3];
  const textOnly = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textOnly.split(' ').filter(Boolean).length;
  results.push({ id, slug, words });
}

console.log("Found " + results.length + " posts:");
results.forEach(r => console.log(`${r.slug}: ${r.words} words`));
