import { resolve, extname } from 'path'
import { readFileSync } from 'fs'
import yaml from 'js-yaml'

export default (onePath) => {
    const arrYamlFile = ['.yaml', '.yml']
    const absolutePath1 = resolve(process.cwd(), `../__fixtures__/${onePath}`)

    try {
        if (!arrYamlFile.includes(extname(absolutePath1))) {
            return JSON.parse(readFileSync(absolutePath1, 'utf-8'))
        }
        return yaml.load(readFileSync(absolutePath1, 'utf-8'), 'utf8')
    } catch (err) {
        return `File node found '${absolutePath1}'`
    }
}