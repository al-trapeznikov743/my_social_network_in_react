export const objectStringСleaning = (obj) => {
    const newObj = {...obj}
    for(let key in newObj) {
        newObj[key] = ''
    }
    return newObj
}