const fs = require('fs');
const path = require('path');

const output = path.join(__dirname, './build.sql');
let content = '';
let filenames = [];

filenames = fs.readdirSync(path.join(__dirname, './procedures'), { encoding: 'utf8' });
filenames.forEach((filename) => {
  const file = fs.readFileSync(path.join(__dirname, './procedures', filename), { encoding: 'utf8' });
  content += `${file}\n\n`;
});

filenames = fs.readdirSync(path.join(__dirname, './triggers'), { encoding: 'utf8' });
filenames.forEach((filename) => {
  const file = fs.readFileSync(path.join(__dirname, './triggers', filename), { encoding: 'utf8' });
  content += `${file}\n\n`;
});

fs.writeFileSync(output, content);
