import { test, expect } from '@jest/globals'
import { gendiff } from '../src/index.js'


test('testExt', () => {
    const diff = gendiff(
        '__fixtures__/filepath1.json',
        '__fixtures__/filepath2.json'
    )
    expect(diff[0].ext).toEqual('.json')
})
