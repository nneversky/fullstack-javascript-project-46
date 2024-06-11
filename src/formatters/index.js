import { recursiveFormat, formatObject } from './recursiveFormat.js'
import { plainFormat } from './plainFormat.js'

export default (astTree, format) => {
    switch (format) {
        case 'recursive':
            return formatObject(recursiveFormat(astTree))
        case 'plain':
            return plainFormat(astTree)
        case 'json':
            return JSON.stringify(astTree)
        default:
            throw new Error(`Invalid format - ${format}`)
    }
}
