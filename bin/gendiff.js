#!/usr/bin/env node
import { program } from 'commander'
import { gendiff } from '../src/index.js'
import { getParsedData } from '../src/parse.js'
import compareFiles from '../src/formatters/getCompareFiles.js'

program
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option(
        '-f, --format [type]',
        'output format: plain or (recursive default)'
    )

    .action((filepath1, filepath2) => {
        const diff = gendiff(filepath1, filepath2)
        const data1 = getParsedData(diff.file1.data, diff.file1.ext)
        const data2 = getParsedData(diff.file2.data, diff.file2.ext)

        console.log(compareFiles(data1, data2))
    })
program.parse(process.argv)
