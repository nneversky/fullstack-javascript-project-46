import { test, expect } from '@jest/globals'
import readFileOnDirectory from '../src/parse.js'
import { generateRecursDiff } from '../formatters/recursive.js'
import { generatePlainDiff } from '../formatters/plain.js'

const defaultPlainObj = `Property 'common' was updated. From '[object Object]' to '[complex value]'
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From 'true' to '[complex value]'
Property 'common.setting6' was updated. From '[object Object]' to '[complex value]'
Property 'common.setting6.doge' was updated. From '[object Object]' to '[complex value]'
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'common.follow' was added with value: 'false'
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: '[complex value]'
Property 'group1' was updated. From '[object Object]' to '[complex value]'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From '[object Object]' to 'str'
Property 'group2' was removed
Property 'group3' was added with value: '[complex value]'`

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

test('test1Obj', () => {
    const file1 = readFileOnDirectory('filepath1.json')
    const file2 = readFileOnDirectory('filepath2.json')
    expect(generateRecursDiff(file1, file2)).toEqual(defaultObj)
})

test('test2Yaml', () => {
    const file1 = readFileOnDirectory('filepath1.yaml')
    const file2 = readFileOnDirectory('filepath2.yaml')
    expect(generateRecursDiff(file1, file2)).toEqual(defaultObj)
})

test('test3Yml', () => {
    const file1 = readFileOnDirectory('filepath1.yml')
    const file2 = readFileOnDirectory('filepath2.yml')
    expect(generateRecursDiff(file1, file2)).toEqual(defaultObj)
})

test('test4PlainObj', () => {
    const file1 = readFileOnDirectory('filepath1.json')
    const file2 = readFileOnDirectory('filepath2.json')
    expect(generatePlainDiff(file1, file2).join('\n')).toEqual(defaultPlainObj)
})
