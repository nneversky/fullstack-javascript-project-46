import { resolve, extname, parse } from 'path';
import { readFileSync } from 'fs';
import makeAstTree from './makeAstTree.js';
import getFormattedContent from './formatters/index.js';
import getParsedData from './parse.js';

const gendiff = (oneFileName, twoFileName, format = 'stylish') => {
  const absolutePath1 = resolve(process.cwd(), oneFileName);
  const ext1 = extname(absolutePath1);
  const filedata1 = readFileSync(absolutePath1, 'utf-8');

  const absolutePath2 = resolve(process.cwd(), twoFileName);
  const ext2 = extname(absolutePath2);
  const filedata2 = readFileSync(absolutePath2, 'utf-8');

  const obj1 = parse(filedata1);
  const obj2 = parse(filedata2);
  const data1 = getParsedData(obj1.name, ext1);
  const data2 = getParsedData(obj2.name, ext2);

  const astTree = makeAstTree(data1, data2);
  const formattedStr = getFormattedContent(astTree, format);
  return formattedStr;
};

export default gendiff;
