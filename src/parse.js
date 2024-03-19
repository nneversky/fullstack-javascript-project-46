import path from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import yaml from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const arrYamlFile = ['.yaml', '.yml']

export default (nameFile) => {
    const typeFile = path.extname(nameFile)
    const pathOnDirectory = path
        .resolve(__dirname, '__fixtures__', nameFile)
        .replace(/src\\/, '')
    try {
        if (!arrYamlFile.includes(typeFile)) {
            const data = readFileSync(pathOnDirectory, 'utf8')
            return JSON.parse(data)
        }

        return yaml.load(readFileSync(pathOnDirectory, 'utf8'))
    } catch (err) {
        return `File (${nameFile}) not found! Path to the file: '${pathOnDirectory}'`
    }
}
