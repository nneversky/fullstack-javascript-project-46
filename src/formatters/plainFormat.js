export const plainFormat = (arr, parentKey = '') => {
    const formattedLines = arr.flatMap((value) => {
        const fullKey = parentKey ? `${parentKey}.${value.key}` : value.key

        if (value.status === 'added') {
            const formattedValue =
                typeof value.value === 'object' && value.value !== null
                    ? '[complex value]'
                    : JSON.stringify(value.value)
            return `Property '${fullKey}' was added with value: ${formattedValue}`
            ///
        } else if (value.status === 'removed') {
            return `Property '${fullKey}' was removed`
            ///
        } else if (value.status === 'changed') {
            const formattedOldValue =
                typeof value.oldValue === 'object' && value.oldValue !== null
                    ? '[complex value]'
                    : JSON.stringify(value.oldValue)
            const formattedNewValue =
                typeof value.newValue === 'object' && value.newValue !== null
                    ? '[complex value]'
                    : JSON.stringify(value.newValue)
            return `Property '${fullKey}' was updated. From ${formattedOldValue} to ${formattedNewValue}`
            ///
        } else if (value.status === 'nested') {
            return plainFormat(value.children, fullKey)
        }
        return []
    })

    return formattedLines.filter((line) => line !== undefined).join('\n')
}