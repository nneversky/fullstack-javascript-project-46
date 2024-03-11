#!/usr/bin/env node
// import genDiff from '@hexlet/code';

const readFileOnDirectory = require('../src/parse')
const { program } = require('commander')

program
    .version('1.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
        const arrFilepathUser = [filepath1, filepath2]
        return [firstJsonFile, secondJsonFile] = arrFilepathUser
    })
program.parse(process.argv)

const oneFile = readFileOnDirectory(firstJsonFile)
const twoFile = readFileOnDirectory(secondJsonFile)

