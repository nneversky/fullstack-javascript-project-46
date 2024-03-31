export const generateAnswerAndCheckError = (
    firstJsonFile,
    secondJsonFile,
) => {
    if (
        typeof firstJsonFile === 'object' &&
        typeof secondJsonFile === 'object'
    ) {
        return true
    } else {
        if (
            typeof firstJsonFile !== 'object' &&
            typeof secondJsonFile !== 'object'
        ) {
            return `${firstJsonFile} AND ${secondJsonFile}`
        } else {
            if (typeof firstJsonFile !== 'object') {
                return firstJsonFile
            } else {
                return secondJsonFile
            }
        }
    }
}
