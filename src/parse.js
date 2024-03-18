import path from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (nameFile) => {
    const pathOnDirectory =
        path.resolve(__dirname, '__fixtures__', nameFile).replace(/src\\/, '');
    try {
        const data = readFileSync(pathOnDirectory, 'utf8')
        const parsedDataJson = JSON.parse(data)
        return parsedDataJson
    } catch (err) {
        return (`File (${nameFile}) not found!, ${err}`)
    }
}
