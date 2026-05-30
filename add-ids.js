const fs = require('fs');
let content = fs.readFileSync('data/blogs.ts', 'utf8');

let newContent = content.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/g, (match, tag, attrs, text) => {
    if (attrs.includes('id=')) return match;
    const id = text.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<${tag}${attrs} id="${id}">${text}</${tag}>`;
});

fs.writeFileSync('data/blogs.ts', newContent);
console.log('done');
