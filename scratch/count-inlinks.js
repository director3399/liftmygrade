const fs = require('fs');

const blogsRaw = fs.readFileSync('data/blogs.ts', 'utf8');
const slugMatches = [...blogsRaw.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

const inlinks = {};
slugMatches.forEach(s => inlinks[s] = 0);

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (['node_modules', '.next', '.git', 'scratch'].includes(item.name)) continue;
    const full = dir + '/' + item.name;
    if (item.isDirectory()) {
      walk(full);
    } else if (full.endsWith('.ts') || full.endsWith('.tsx')) {
      const text = fs.readFileSync(full, 'utf8');
      slugMatches.forEach(s => {
        const count = text.split(s).length - 1;
        if (full === './data/blogs.ts') {
          inlinks[s] += Math.max(0, count - 1);
        } else {
          inlinks[s] += count;
        }
      });
    }
  }
}

walk('.');
console.log('Internal links referencing each blog slug across codebase:');
Object.entries(inlinks).forEach(([slug, count]) => {
  console.log(`${slug}: ${count}`);
});
