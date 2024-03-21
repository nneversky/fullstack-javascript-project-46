import { generateAnswerAndCheckOnError } from '../src/index.js'
import { test, expect } from '@jest/globals'
import readFileOnDirectory from '../src/parse.js'

const file1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
}

const file2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
}

test('readFile', () => {
    expect(readFileOnDirectory('filepath1.json')).toEqual(file1)
})

test('readErrorFile', () => {
    const pathFile = readFileOnDirectory('filepath2')
    const nameLocalDisk = pathFile.split("'")[1].at(0)
    expect(pathFile).toEqual(
        `File (filepath2) not found! Path to the file: '${nameLocalDisk}:\\Users\\skele\\Documents\\MyProjectJs\\fullstack-javascript-project-46\\__fixtures__\\filepath2'`
    )
})

test('testOneDimensionalObj', () => {
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual({
        '+ verbose': true,
        host: 'hexlet.io',
        '- timeout': 50,
        '+ timeout': 20,
        '- proxy': '123.234.53.22',
        '- follow': false,
    })
})
