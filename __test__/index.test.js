import { generateAnswerAndCheckOnError } from '../src/index.js'
import { test, expect } from '@jest/globals'

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
