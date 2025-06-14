let std = [
    {
        id: 1, 
        name: "krisha",
        emai: "krisha@gmail.com",
        course: "FSD"
    },
    {
        id:2,
        name: "amit",
        emai: "amit@gmail.com",
        course: "AI/ML"
    },
    {
        id:3,
        name: "Sanjay",
        emai: "sanjay@gmail.com",
        course: "FSD"
    },
    {
        id:4,
        name: "yashwi",
        emai: "yashwi@gmail.com",
        course: "AI/ML"
    },
    {
        id:5,
        name: "jay",
        emai: "jay@gmail.com",
        course: "UI/UX"
    },
    {
        id:6,
        name: "krishnal",
        emai: "krishnal@gmail.com",
        course: "UI/UX"
    },
]


// for(let i=0; i<std.length; i++)
// {
//     console.log(std[i].name)
// }


// std.forEach((ele)=> console.log(ele.name))

// std.forEach((ele)=>{
//     if(ele.course == "FSD")
//     {
//         console.log(ele)
//     }
// })

// forEach does not reaturn



//  std.forEach((ele) => ele.course == "AI/ML" ? console.log(ele.name) : null)


let fsd = std.filter((ele) => ele.course == "UI/UX"  )


let obj = {id:2, name: "yash"}

obj.age = 22;

obj.loc = "bhavngar"
// console.log(obj)


Std = std.map((ele)=> {
    ele.branch = "bhavnagar";
    if(ele.course == "FSD")
    {
        ele.faculty = "Alishan Shaikh"
    }
    else if(ele.course == "UI/UX")
    {
        ele.faculty = "Chitraparna Banergy"
    }
    else {
        ele.faculty = "Mohit sir"
    }
    return ele;
})

console.log(std)


    