let arr = ["Sohaib", "Ehtish", "BB", "WW", "QQQQ", ""]

let newarr = arr.filter((item) => {
    if(item.includes('a')|| item.includes('e') || item.includes('i') || item.includes('o') || item.includes('u'))
    return true
})

console.log(newarr);