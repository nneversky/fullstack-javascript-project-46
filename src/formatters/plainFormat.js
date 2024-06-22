export const plainFormat = (arr, parentKey = '') => {
    const formattedLines = arr.flatMap((value) => {
        const fullKey = parentKey ? `${parentKey}.${value.key}` : value.key

        if (value.status === 'added') {
            const formattedValue =
                typeof value.value === 'object' && value.value !== null
                    ? '[complex value]'
                    : `'${JSON.stringify(value.value).slice(1, JSON.stringify(value.value).length-1)}''`
            return `Property '${fullKey}' was added with value: ${formattedValue}`
            ///
        }
        if (value.status === 'removed') {
            return `Property '${fullKey}' was removed`
            ///
        }
        if (value.status === 'changed') {
            const formattedOldValue =
                typeof value.oldValue === 'object' && value.oldValue !== null
                    ? '[complex value]'
                    : `'${JSON.stringify(value.oldValue).slice(1, JSON.stringify(value.oldValue).length-1)}'`
            const formattedNewValue =
                typeof value.newValue === 'object' && value.newValue !== null
                    ? '[complex value]'
                    : `'${JSON.stringify(value.newValue).slice(1, JSON.stringify(value.newValue).length-1)}'`
            return `Property '${fullKey}' was updated. From ${formattedOldValue} to ${formattedNewValue}`
            ///
        }
        if (value.status === 'nested') {
            return plainFormat(value.children, fullKey)
        }
        return []
    })

    return formattedLines.filter((line) => line !== undefined).join('\n')
}
