import { resolve, extname } from 'path'
import { readFileSync } from 'fs'

export const gendiff = (oneFileName, twoFileName, nameFormat) => {
    const absolutePath1 = resolve(process.cwd(), `../__fixtures__/${oneFileName}`)
    const ext1 = extname(absolutePath1)
    const filedata1 = readFileSync(absolutePath1, 'utf-8')

    const absolutePath2 = resolve(process.cwd(), `../__fixtures__/${twoFileName}`)
    const ext2 = extname(absolutePath2)
    const filedata2 = readFileSync(absolutePath2, 'utf-8')
}