import { generateAnswerAndCheckOnError } from '../src/index.js'
import { test, expect } from '@jest/globals'
import readFileOnDirectory from '../src/parse.js'
import path from 'path'

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
    const currentDirectory = process.cwd()
    const diskName = path.parse(currentDirectory).root
    expect(readFileOnDirectory('filepath2')).toEqual(
        `File (filepath2) not found!, Error: ENOENT: no such file or directory, open '${diskName}Users\\skele\\Documents\\MyProjectJs\\fullstack-javascript-project-46\\__fixtures__\\filepath2'`
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
