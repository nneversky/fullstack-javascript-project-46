#!/usr/bin/env node
import { program } from 'commander'
import generateDiff from '../src/formatters/index.js'
import gendiff from '../src/index.js'

program
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option(
        '-f, --format [type]',
        'output format: plain or (recursive default)'
    )

    .action((filepath1, filepath2, type) => {
        const diff = generateDiff(gendiff(filepath1), gendiff(filepath2), type)
        console.log(diff)
    })
program.parse(process.argv)
