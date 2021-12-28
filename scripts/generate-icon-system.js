const { readdirSync } = require('fs');
const { isSVG, removeExtension } = require('./utils');
const {
  generateWebIconMap,
  generateIconNamesType,
  generateIconsPreviewDoc,
} = require('./generators');

const ICON_SOURCE_FOLDER = 'src/assets/icons';
const ICON_MAP_OUTPUT_FOLDER = 'src/components/_icons';
const DOCS_FOLDER = 'docs';

const icons = readdirSync(ICON_SOURCE_FOLDER).filter(isSVG).map(removeExtension);

try {
  generateWebIconMap(icons, { dir: ICON_MAP_OUTPUT_FOLDER, source: ICON_SOURCE_FOLDER });
  generateIconNamesType(icons, { dir: ICON_MAP_OUTPUT_FOLDER });
  generateIconsPreviewDoc(icons, { dir: DOCS_FOLDER, source: ICON_SOURCE_FOLDER });
} catch (e) {
  console.error(e);
}
