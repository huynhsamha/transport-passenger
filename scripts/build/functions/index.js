const fs = require('fs');
const path = require('path');

const output = path.join(__dirname, './build.sql');
let content = '';

let file = '';
let filenames = [];

file = fs.readFileSync(path.join(__dirname, './show_message.sql'), { encoding: 'utf8' });
content += `${file}\n\n`;

filenames = fs.readdirSync(path.join(__dirname, './functions'), { encoding: 'utf8' });

filenames.forEach((filename) => {
  const file = fs.readFileSync(path.join(__dirname, './functions', filename), { encoding: 'utf8' });
  content += `${file}\n\n`;
});

fs.writeFileSync(output, content);
