import { test, expect } from '@jest/globals';
import path, { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { gendiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

test('testJsonFormat', () => {
  const pathJsonFormat = resolve(process.cwd(), '__fixtures__/resultJson.txt');
  const jsonFormatData = readFileSync(pathJsonFormat, 'utf-8');
  const filepath1 = getFixturePath('filepath1.json');
  const filepath2 = getFixturePath('filepath2.json');
  const result = gendiff(filepath1, filepath2, 'json');
  expect(result).toEqual(jsonFormatData);
});
