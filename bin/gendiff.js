#!/usr/bin/env node
import { Command } from 'commander'
import { gendiff } from '../src/index.js'
const program = new Command()

program
    .version('14.8.8')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option(
        '-f, --format [type]',
        'output format: plain or (recursive default)'
    )

    .action((filepath1, filepath2, format) => {
        const formattedStr = gendiff(
            filepath1,
            filepath2,
            program.opts().format
        )

        console.log(formattedStr)
    })
program.parse()
