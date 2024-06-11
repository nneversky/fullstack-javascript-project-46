export const formatObject = (obj) => {
    let formattedString = JSON.stringify(obj, null, 4)
    formattedString = formattedString.replace(/"(\+ [^"]+)":/g, '$1:')
    return formattedString
}

export const recursiveFormat = (arr) => {
    const obj = {}
    arr.forEach((value) => {
        if (value.status === 'added') {
            obj[`+ ${value.key}`] = value.value
            ///
        } else if (value.status === 'unchanged') {
            obj[value.key] = value.value
            ///
        } else if (value.status === 'removed') {
            obj[`- ${value.key}`] = value.value
            ///
        } else if (value.status === 'changed') {
            obj[`- ${value.key}`] = value.oldValue
            obj[`+ ${value.key}`] = value.newValue
            ///
        } else if (value.status === 'nested') {
            obj[value.key] = recursiveFormat(value.children)
        }
    })
    return obj
}
