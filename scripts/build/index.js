const fs = require('fs');
const path = require('path');

require('./functions');
require('./triggers');

const output = path.join(__dirname, './build.sql');
let content = '';

const filenames = [
  './functions/build.sql',
  './triggers/build.sql'
];

filenames.forEach((filename) => {
  const file = fs.readFileSync(path.join(__dirname, filename), { encoding: 'utf8' });
  content += `${file}\n\n`;
});

fs.writeFileSync(output, content);
