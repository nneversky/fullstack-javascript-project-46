import { resolve, extname, parse } from 'path'
import { readFileSync } from 'fs'

export const gendiff = (oneFileName, twoFileName) => {
    const absolutePath1 = resolve(process.cwd(), oneFileName)
    const ext1 = extname(absolutePath1)
    const filedata1 = readFileSync(absolutePath1, 'utf-8')

    const absolutePath2 = resolve(process.cwd(), twoFileName)
    const ext2 = extname(absolutePath2)
    const filedata2 = readFileSync(absolutePath2, 'utf-8')

    const obj1 = parse(filedata1)
    obj1.ext = ext1
    const obj2 = parse(filedata2)
    obj2.ext = ext2

    return [obj1, obj2]
}
