#!/usr/bin/env node
import { program } from 'commander'
import readFileOnDirectory from '../src/parse.js'
import genDiff from '../formatters/index.js'

let firstJsonFile
let secondJsonFile

program
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format: plain or (recursive default)')
    .action((filepath1, filepath2, type) => {
        firstJsonFile = readFileOnDirectory(filepath1)
        secondJsonFile = readFileOnDirectory(filepath2)
        const diff = genDiff(firstJsonFile, secondJsonFile, type)
        console.log(diff)
    })
program.parse(process.argv)
