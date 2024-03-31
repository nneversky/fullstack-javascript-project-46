export const generatePlainDiff = (obj1, obj2, path = '') => {
    const diff = []

    Object.keys(obj1).forEach((key) => {
        const newPath = path ? `${path}.${key}` : key
        if (!obj2.hasOwnProperty(key)) {
            diff.push(`Property '${newPath}' was removed`)
        } else {
            if (
                typeof obj1[key] !== typeof obj2[key] ||
                JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])
            ) {
                const value =
                    typeof obj2[key] === 'object'
                        ? '[complex value]'
                        : obj2[key]
                diff.push(
                    `Property '${newPath}' was updated. From '${obj1[key]}' to '${value}'`
                )
            }
            if (
                typeof obj1[key] === 'object' &&
                typeof obj2[key] === 'object'
            ) {
                diff.push(...generatePlainDiff(obj1[key], obj2[key], newPath))
            }
        }
    })
    Object.keys(obj2).forEach((key) => {
        const newPath = path ? `${path}.${key}` : key
        if (!obj1.hasOwnProperty(key)) {
            const value =
                typeof obj2[key] === 'object' ? '[complex value]' : obj2[key]
            diff.push(`Property '${newPath}' was added with value: '${value}'`)
        }
    })
    return diff
}
