export default (objOne, objTwo) => {
    const objResult = {}
    Object.keys(objOne).forEach((keyObjOne) => {
        Object.keys(objTwo).forEach((keyObjTwo) => {
            if (
                keyObjOne === keyObjTwo &&
                objOne[keyObjOne] === objTwo[keyObjTwo]
            ) {
                objResult[keyObjOne] = objOne[keyObjOne]
            } else if (
                keyObjOne === keyObjTwo &&
                objOne[keyObjOne] !== objTwo[keyObjTwo]
            ) {
                objResult[`- ${keyObjTwo}`] = objOne[keyObjOne]
                objResult[`+ ${keyObjTwo}`] = objTwo[keyObjTwo]
            } else if (!Object.hasOwn(objOne, keyObjTwo)) {
                objResult[`+ ${keyObjTwo}`] = objTwo[keyObjTwo]
            } else if (!Object.hasOwn(objTwo, keyObjOne)) {
                objResult[`- ${keyObjOne}`] = objOne[keyObjOne]
            }
        })
    })
    return objResult
}