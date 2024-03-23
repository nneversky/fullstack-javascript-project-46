import { generateAnswerAndCheckOnError } from '../src/index.js'
import { test, expect } from '@jest/globals'
import readFileOnDirectory from '../src/parse.js'

test('readFile', () => {
    expect(readFileOnDirectory('filepath1.json')).toEqual({
        common: {
            setting1: 'Value 1',
            setting2: 200,
            setting3: true,
            setting6: {
                key: 'value',
                doge: {
                    wow: '',
                },
            },
        },
        group1: {
            baz: 'bas',
            foo: 'bar',
            nest: {
                key: 'value',
            },
        },
        group2: {
            abc: 12345,
            deep: {
                id: 45,
            },
        },
    })
})

test('readErrorFile', () => {
    const pathFile = readFileOnDirectory('filepath2')
    expect(pathFile).toEqual('File (filepath2) not found!')
})

const defaultObj = {
    common: {
        setting1: 'Value 1',
        '- setting2': 200,
        '- setting3': true,
        '+ setting3': null,
        setting6: {
            key: 'value',
            doge: {
                '- wow': '',
                '+ wow': 'so much',
            },
            '+ ops': 'vops',
        },
        '+ follow': false,
        '+ setting4': 'blah blah',
        '+ setting5': {
            key5: 'value5',
        },
    },
    group1: {
        '- baz': 'bas',
        '+ baz': 'bars',
        foo: 'bar',
        '- nest': {
            key: 'value',
        },
        '+ nest': 'str',
    },
    '- group2': {
        abc: 12345,
        deep: {
            id: 45,
        },
    },
    '+ group3': {
        deep: {
            id: {
                number: 45,
            },
        },
        fee: 100500,
    },
}

test('test1Obj', () => {
    const file1 = readFileOnDirectory('filepath1.json')
    const file2 = readFileOnDirectory('filepath2.json')
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual(defaultObj)
})

test('test2Yaml', () => {
    const file1 = readFileOnDirectory('filepath1.yaml')
    const file2 = readFileOnDirectory('filepath2.yaml')
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual(defaultObj)
})

test('test3Yml', () => {
    const file1 = readFileOnDirectory('filepath1.yml')
    const file2 = readFileOnDirectory('filepath2.yml')
    expect(generateAnswerAndCheckOnError(file1, file2)).toEqual(defaultObj)
})
