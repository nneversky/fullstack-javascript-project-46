import { resolve, extname } from 'path'
import { readFileSync } from 'fs'

export const gendiff = (oneFileName, twoFileName) => {
    const objProp = {}

    const absolutePath1 = resolve(process.cwd(), oneFileName)
    const ext1 = extname(absolutePath1)
    const filedata1 = readFileSync(absolutePath1, 'utf-8')

    const absolutePath2 = resolve(process.cwd(), twoFileName)
    const ext2 = extname(absolutePath2)
    const filedata2 = readFileSync(absolutePath2, 'utf-8')

    objProp.file1 = { filepath: absolutePath1, ext: ext1, data: filedata1 }
    objProp.file2 = { filepath: absolutePath2, ext: ext2, data: filedata2 }

    return objProp
}
