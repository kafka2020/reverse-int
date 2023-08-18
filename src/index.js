module.exports = function reverse (n) {
    let str = n.toString()
    let arr = Array.from(str)
    arr.reverse()
    str = arr.join('')    // Join array back into a string
    return parseInt(str)     // Converts arr into a integer from a string
}
