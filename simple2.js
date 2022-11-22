// // // let {add} = require(".simple")

// // // add(5,g)

// // let str1 = 'hello'
// // let str2 = "world"

// // let str3 = `                ${str1}${str2} !!!!`

// // console.log(str3)
// // console.log(str3.length)
// // console.log(str3.trim())
// // console.log(str3.trim().length)

// let str = "1,2,3,4,567"

// console.log(str.split(","))

// let str = "hello world"

// console.log(str.search("l"))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

//console.log(str.replace("hello","hi"))
//console.log(str.replaceAll("hello","hi"))
//console.log(str.replace(/hello/g,"hi"))

// console.log(typeof(str))
// let arr = [1,2,3,4,"str",true]

// console.log(arr)
// console.log(arr[4])

// arr.push(7)
// arr.pop()
// arr.shift()
// arr.unshift(0)

// console.log(arr)

// let arr = [1,2,3,4,5,6]
// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i])

// // }

// for(let item of arr){
//     console.log(item)
// }

// let text = ["hello","world","i am","zebra"]
// for(let item of text){
// console.log(item.replace(/a|e|i|o|u/g,""))

// }

// let arr = [1,2,3,4,5,6,7,8,9]

// let arr2 = arr.map(function(element){
//     return element
// })

// console.log(arr2)

// let arr = [1,2,3,4,5,6,7,8,9]

// // let arr2 = arr.filter((element) =>{
// //     return element % 2 ==0
// // })

// // console.log(arr2)

// let sum = arr.reduce((curr, next)=>{
//     return curr + next
// })

// console.log(sum)

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let check_some = arr.some((element)=>{
//     return element % 2 == 0
// })

// console.log(check_some)

// let obj = {
//     name: "jj",
//     age: 14,
//     color: ["red", "bule"],
    // detail: {
    //     height: 120
    // }
//}

// console.log(obj.name)
// console.log(obj["age"])

// obj.detail = {
//     height: 120
// }

// let {name,age} = obj

// console.log(name)
// console.log(age)

// let age = 20
// let fname = "hello"
// let lname = "world"

// let obj = {
//     //name: `${fname} ${lname}`,
//     fname,
//     lname,
//     age
// }

var salesRecord = [{
    day: 1, 
    product:[
        {name: 'a',value: 5},{name: 'b',value: 2},
        {name: 'a',value: 7},{name: 'b',value: 4}]
}]

for(let i=0; i<salesRecord.length; i++){
    console.log(salesRecord[i])
    let sumA = 0
    let sumb = 0
    

}


