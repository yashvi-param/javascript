
// BigInt = 10000000000000000000

// console.log(BigInt)


// function rec(num, name){
//    console.log(name + " Got " + num +" Rs")

// //    return {
// //     name: name,
// //     rupee:num
// //    }

// return [name, num]
// }

// let num = 200;
// let name = "yashwi"

// console.log(rec(num, name))




function rec(n){ // 4
    if(n <= 1)
    {
        return;
    }
    
    console.log(n)
    return n*rec(n-1)  // 4*rec(3)  = 4 * 6 = 24
}



// function rec(n){ // 3
//     if(n < 1)
//     {
//         return;
//     }

//     return n*rec(n-1)  // 3* rec(2)  = 3 * 2 = 6
// }




// function rec(n){ // 2
//     if(n < 1)
//     {
//         return;
//     }

//     return n*rec(n-1)  // 2*red(1)  = 2* 1
// }



// function rec(n){ // 1
//     if(n < 1)
//     {
//         return;
//     }

//     return n*rec(n-1)  // 1*red(0) = 1  
// }




// function rec(n){ // 0
//     if(n < 1)
//     {
//         return;
//     }

//     return n*rec(n-1)  // 1*red(0)  
// }









console.log(rec(4))