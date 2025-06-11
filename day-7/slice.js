let data = ["one", "two", "three", "four", "five", 11, 22]



// slice(start_index, end_index)


// let chunk = data.slice(1, 4)

// let revChunk = data.slice(-4, -1)
// 

// console.log(chunk)
// console.log(data)
// console.log(revChunk)

// SPLICE

// splice(start_index, no. of ele)

let cut = data.splice(0, 2)

let revCut = data.splice(-2, -2)

console.log(cut)
console.log(data)
console.log(revCut)