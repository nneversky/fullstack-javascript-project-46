import path from 'node:path'
import { readFileSync } from 'node:fs'

export default (nameFile) => {
    const pathOnDirectory =
        path.resolve(process.cwd(), '../') + '\\__fixtures__\\' + nameFile
    try {
        const data = readFileSync(pathOnDirectory, 'utf8')
        const parsedDataJson = JSON.parse(data)
        return parsedDataJson
    } catch (err) {
        return (`File (${nameFile}) not found!, ${err}`)
    }
}
