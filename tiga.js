// removeEveryOther = (arr) => {
//     var newArr = []
//     arr.filter(function (item, index) {
//         if (index % 2 === 0){
//             newArr.push(item)
//         }
//     })
//     return newArr
// }

// removeEveryOther = (arr) => {
//     var newArr = []
//     for (var i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// removeEveryOther = (arr) => {
//     return arr.filter((item, index) => !(index % 2))
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Say', 'Love']))
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7]))



// firstNonConsecutive = (arr) => {
//     for (var i = 1; i < arr.length; i++) {
//         var result = arr[i - 1] + 1
//         if (result !== arr[i]) {
//             return arr[i]
//         }
//     }
//     return null
// }

// firstNonConsecutive = (arr) => {
//     for (let i = 0; i < arr.length - 1; ++i) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i + 1]
//         }
//     }
//     return 'all true!'
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8, 9]))
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9]))



// hero = (peluru, naga) => {
//     if (peluru >= naga * 2) {
//         return true
//     } else {
//         return false
//     }
// }

// hero = (peluru, naga) => {
//     return peluru / 2 >= naga
// }

// console.log(hero(10, 5))
// console.log(hero(4, 7))
// console.log(hero(1500, 750))
// console.log(hero(1500, 751))



// arrayPlusArray = (arr1, arr2) => {
//     var plusArr1 = 0
//     var plusArr2 = 0
//     for (var i = 0; i < arr1.length; i++) {
//         plusArr1 += arr1[i]
//     }
//     for (var j = 0; j < arr2.length; j++) {
//         plusArr2 += arr2[j]
//     }
//     return plusArr1 + plusArr2
// }

// arrayPlusArray = (arr1, arr2) => {
//     var newArr = [...arr1, ...arr2]
//     return newArr.reduce((a, b) => a + b)
// }

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))



// var a = 123..toString()
// var b = (123).toString()
// var c = 123 .toString()
// var d = 123 + ''

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)