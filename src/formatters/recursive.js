export const generateRecursDiff = (obj1, obj2) => {
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    const diff = {}

    keys.forEach((key) => {
        if (!(key in obj1)) {
            diff[`+ ${key}`] = obj2[key]
        } else if (!(key in obj2)) {
            diff[`- ${key}`] = obj1[key]
        } else if (obj1[key] !== obj2[key]) {
            if (
                typeof obj1[key] === 'object' &&
                typeof obj2[key] === 'object'
            ) {
                diff[key] = generateRecursDiff(obj1[key], obj2[key])
            } else {
                diff[`- ${key}`] = obj1[key]
                diff[`+ ${key}`] = obj2[key]
            }
        } else {
            diff[key] = obj1[key]
        }
    })

    return diff
}
