#!/usr/bin/env node
// import genDiff from '@hexlet/code';
import { program } from 'commander'
import readFileOnDirectory from '../src/parse.js'
import { generateAnswerAndCheckOnError } from '../src/index.js'

let firstJsonFile
let secondJsonFile

//           node gendiff filepath1.json filepath2.json
program
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
        firstJsonFile = readFileOnDirectory(filepath1)
        secondJsonFile = readFileOnDirectory(filepath2)
        console.log(
            generateAnswerAndCheckOnError(firstJsonFile, secondJsonFile)
        )
    })
program.parse(process.argv)
