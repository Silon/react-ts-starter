const { toPascalCase } = require('./utils');
const { writeFileSync, readFile, readFileSync } = require('fs');

const generateWebIconMap = (icons, { dir, source }) => {
  const iconMapContent = [
    '/*',
    '!!!!!!!!!!!!!!',
    'THIS FILE IS GENERATED BY "yarn icons" COMMAND. DO NOT CHANGE!',
    '*/',
    '',
    icons
      .map((icon) => `import { ReactComponent as ${toPascalCase(icon)} } from '${source}/${icon}.svg';`)
      .join('\n'),
    'export const ICONS = {',
    icons.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join('\n'),
    '};',
  ].join('\n');

  writeFileSync(`${dir}/icons.map.tsx`, iconMapContent);
  console.log('Icons Map created! ✅');
};

const generateIconNamesType = (icons, { dir }) => {
  const names = icons.map((icon) => `"${icon}"`).join(' | ');
  const content = [
    '/*',
    '!!!!!!!!!!!!!!',
    'THIS FILE IS GENERATED BY "yarn icons" COMMAND. DO NOT CHANGE!',
    '*/',
    '',
    `export type TIconsNames = ${names};`
  ].join('\n');

  writeFileSync(`${dir}/icons.types.ts`, content);
  console.log('Icons names type created! ✅');
};

const generateIconsPreviewDoc = (icons, { dir, source }) => {
  const data = icons.map((name) => {
    const iconPath = source + '/' + name + '.svg';
    return {
      name,
      content: readFileSync(iconPath, 'utf8'),
    };
  });

  const iconsItems = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, content }) => `<tr><td>${content}</td><td>${name}</td></td>`);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Icons Preview</title>
        <style>
          body { margin: 0; padding: 50px; }
          table { width: 500px; border: thin solid #ddd; }
          table tr { height: 60px; }
          table td svg { max-height: 50px; }
          table td:first-of-type { width: 100px; text-align: center; }
          table td:last-of-type { font-size: 16px; font-family: sans-serif; }
        </style>
      </head>
      <body>
        <table>
          <tbody>
            ${iconsItems}
          </tbody>
        </table>
      </body>
    </html>
  `;

  writeFileSync(`${dir}/icons-list.html`, html);
  console.log('Icons preview doc file created! ✅');
};

module.exports = {
  generateIconsPreviewDoc,
  generateIconNamesType,
  generateWebIconMap,
};
