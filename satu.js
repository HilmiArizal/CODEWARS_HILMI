// getNameById = (id) => {
//     var name = {
//         1 : 'Hilmi',
//         2 : 'Fikry',
//         3 : 'Iqbal',
//         4 : 'Hadi',
//         5 : 'Robi'
//     }
//     return name[id]
// }

// console.log(getNameById(2))
// console.log(getNameById(5))


// sumArrWithoutMin = (arr) => {
//     var output = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] > 0){
//             output += arr[i]
//         }
//     }
//     return output
// }

// console.log(sumArrWithoutMin([1,2,-3,-4,5]))
// console.log(sumArrWithoutMin([5,4,2,3,5]))
// console.log(sumArrWithoutMin([]))


//prototypeFunction//
// String.prototype.mustBeUpperCase = function() {
//     return this.valueOf().toUpperCase() === this.valueOf();
// }

// console.log("Hello".mustBeUpperCase());
// console.log("HELLO".mustBeUpperCase());


// String.prototype.toAlternatingCase = function () {
//     return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join("")
// }

// console.log("Hello".toAlternatingCase());


//maximumValue
expressionMatter = (a, b, c) => {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c
    )
}

console.log(expressionMatter(2, 1, 2))
console.log(expressionMatter(2, 10, 3))