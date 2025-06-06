//1. local scope
//2. global scope
//3. functional scope




function big(){

    // lexical scope

    let num = 10;

    function small(){
        return num;
    }

 return small() // lexical scope
}



let val = big() // small()


console.log(val)




























// function f1(){
//     console.log("f1 function")
//     f2();
// }

// function f2(){
//     console.log("f2 function")
//     f3();  
// }

// function f3(){
//     console.log("f3 function")  
// }
// f1();

