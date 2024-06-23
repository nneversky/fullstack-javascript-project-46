import { stylishFormat } from './stylishFormat.js';
import plainFormat from './plainFormat.js';

export default (astTree, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(astTree);
    case 'plain':
      return plainFormat(astTree);
    case 'json':
      return JSON.stringify(astTree);
    default:
      throw new Error(`Invalid format - ${format}`);
  }
};
