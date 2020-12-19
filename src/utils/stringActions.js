export const splitBySpace = (text) => {
    if(typeof text === 'string') {
        const textArray = text.split(' ')
        return textArray
    }
    return undefined
}

export const getNameString = (fullName = []) => {
    if(fullName.length !== 0) {
        return fullName[0]
    }
    return undefined
}