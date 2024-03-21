import { generateAnswerAndCheckOnError } from '../src/index.js'
import { test, expect } from '@jest/globals'
import readFileOnDirectory from '../src/parse.js'

test('readFile', () => {
    expect(readFileOnDirectory('filepath1.json')).toEqual({
        host: 'hexlet.io',
        timeout: 50,
        proxy: '123.234.53.22',
        follow: false,
    })
})

test('readErrorFile', () => {
    const pathFile = readFileOnDirectory('filepath2')
    expect(pathFile).toEqual('!!File (filepath2) not found!!')
})

test('test1OneDimensionalObj', () => {
    const file1 = readFileOnDirectory('filepath1.json')
    const file2 = readFileOnDirectory('filepath2.json')
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual({
        '+ verbose': true,
        host: 'hexlet.io',
        '- timeout': 50,
        '+ timeout': 20,
        '- proxy': '123.234.53.22',
        '- follow': false,
    })
})

test('test2OneDimensionalYaml', () => {
    const file1 = readFileOnDirectory('filepath1.yaml')
    const file2 = readFileOnDirectory('filepath2.yaml')
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual({
        '+ verbose': true,
        host: 'hexlet.io',
        '- timeout': 50,
        '+ timeout': 20,
        '- proxy': '123.234.53.22',
        '- follow': false,
    })
})

test('test3OneDimensionalYml', () => {
    const file1 = readFileOnDirectory('filepath1.yml')
    const file2 = readFileOnDirectory('filepath2.yml')
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual({
        '+ verbose': true,
        host: 'hexlet.io',
        '- timeout': 50,
        '+ timeout': 20,
        '- proxy': '123.234.53.22',
        '- follow': false,
    })
})
