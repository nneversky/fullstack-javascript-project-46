export const formatObject = (obj) => {
    const formattedString = JSON.stringify(obj, null, 4)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/: "([^"]+)"/g, ': $1'); 
    return formattedString;
};

export const stylishFormat = (arr) => {
    const obj = {};
    arr.forEach((value) => {
        if (value.status === 'added') {
            obj[`+ ${value.key}`] = value.value;
        } else if (value.status === 'unchanged') {
            obj[value.key] = value.value;
        } else if (value.status === 'removed') {
            obj[`- ${value.key}`] = value.value;
        } else if (value.status === 'changed') {
            obj[`- ${value.key}`] = value.oldValue;
            obj[`+ ${value.key}`] = value.newValue;
        } else if (value.status === 'nested') {
            obj[value.key] = stylishFormat(value.children);
        } else {
            throw new Error(`Unknown type ${value.status}.`);
        }
    });
    return obj;
};
