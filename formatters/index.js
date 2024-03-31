import { generateAnswerAndCheckError } from './generateAnswer.js'
import { generateRecursDiff } from './recursive.js'
import { generatePlainDiff } from './plain.js'

export default (filepath1, filepath2, formatName) => {
    if (Object.keys(formatName).length === 0) {
        if (generateAnswerAndCheckError(filepath1, filepath2) === true)
            return JSON.stringify(
                generateRecursDiff(filepath1, filepath2),
                null,
                2
            )

        return generateAnswerAndCheckError(filepath1, filepath2)
    } else if (formatName.format === 'plain') {
        if (generateAnswerAndCheckError(filepath1, filepath2) === true)
            return generatePlainDiff(filepath1, filepath2).join('\n')

        return generateAnswerAndCheckError(filepath1, filepath2)
    } else {
        return `"Unknown format: (${formatName.format})"`
    }
}
