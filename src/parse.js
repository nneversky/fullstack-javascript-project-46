module.exports = readFileOnDirectory = (nameFile) => {
    const path = require('node:path')
    const fs = require('fs')
    const pathOnDirectory = path.resolve(process.cwd(), '../') + '\\__fixtures__\\' + nameFile
    fs.readFile(pathOnDirectory, 'utf8', (err, data) => {
        if (err) {
            console.error('File not found!!!')
            return
        }
        console.log(data)
    })
}
