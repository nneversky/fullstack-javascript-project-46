#!/usr/bin/env node
import { program } from 'commander'
import { gendiff } from '../src/index.js'
import { getParsedData } from '../src/parse.js'
import { makeAstTree } from '../src/makeAstTree.js'

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
        const data1 = getParsedData(diff[0].name, diff[0].ext)
        const data2 = getParsedData(diff[1].name, diff[1].ext)
        console.log(makeAstTree(data1, data2))
    })
program.parse(process.argv)
