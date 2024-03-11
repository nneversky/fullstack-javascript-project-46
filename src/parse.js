module.exports = findDirectory = (nameFile) => {
  const path = require('node:path');
  const directoryParent =
    path.resolve(process.cwd(), '../') + '\\__fixtures__\\' + nameFile;
  return directoryParent;
};
