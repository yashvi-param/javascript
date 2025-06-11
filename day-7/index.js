// let arr = new Array();

let arr = []
// console.log(arr)

arr[0] = 20;
arr[1] = 40;

arr.push("alishan")

arr[5] = 27

arr.pop()
arr.pop()

// console.log("arr length::"+ arr.length)
// console.log(arr)


let nums = [22, 33, 11, 65, 78, 34]

nums.shift()
nums.unshift("99")
console.log(nums)


console.log(nums.indexOf(99))
console.log(nums.at(nums.length-1))
console.log(nums.includes(78))




// let check = nums.every(odd)


// let check = nums.every(function odd(ele){
//     return ele%2 == 0;
// })


//  let check = nums.every( function(ele){
//      return ele%2 == 0;
//  })

//  let check = nums.every((ele) => {
//      return ele%2 == 0;
//  })


 let check = nums.every((ele) =>  ele%2 == 0)

// function odd(ele){
//     return ele%2 == 0;
// }

// const odd = function(ele){
//      return ele%2 == 0;
// }



// console.log(nums.every())

// let check = nums.every((ele) => ele %2 == 0)
// let check = nums.every((ele) => ele > 22)



// console.log("odd: " + check)



// let evNum = nums.find(function(n){
//     return n%2 == 0;
// })

let evNum = nums.some((n)=> n%2 ==3)

console.log(evNum)