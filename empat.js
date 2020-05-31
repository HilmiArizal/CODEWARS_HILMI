// getDrinkByProfesion = (params) => {
//     var lowerParams = params.toLowerCase()
//     switch (lowerParams) {
//         case 'jabroni':
//             return 'hilmiarizal';
//         case 'rizalun':
//             return 'laki-laki';
//         case 'santoso':
//             return 'bahagia';
//         default:
//             return 'tidak ada'
//     }
// }

// getDrinkByProfesion = (params) => {
//     let obj = {
//         "jabroni": "hilmiarizal",
//         "rizalun": "laki-laki",
//         "santoso": "bahagia"
//     }
//     return obj[params.toLowerCase()] || 'tidak ada'
// }


// console.log(getDrinkByProfesion('jabrOni'))
// console.log(getDrinkByProfesion('riZaLun'))
// console.log(getDrinkByProfesion('sanTOSO'))
// console.log(getDrinkByProfesion('alalal'))




// abbrevName = (name) => {
//     var splitName = name.split(' ');
//     var firstName = splitName[0][0].toUpperCase();
//     var lastName = splitName[1][0].toUpperCase();
//     var outputName  = `${firstName}.${lastName}`;

//     return outputName
// }

// abbrevName = (name) => {
//     [firstName, lastName] = name.toUpperCase().split(' ')
//     var outputName = `${firstName[0]}.${lastName[0]}`
//     return outputName
// }

// function abbrevName (name){
//     var outputName = name.toUpperCase().split(' ').map(x => x[0]).join('.')
//     return outputName
// }

// console.log(abbrevName('Hilmi Arizal'))



// points = (games) => {
//     let result = 0;
//     for (var i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             result += 3
//         } else if (games[i][0] == games[i][2]) {
//             result += 1
//         }
//     }
//     return result
// }

// const points = games =>
//     games.reduce((total, result) => {
//         const [x, y] = result.split(':').map(Number)
//         if (x > y) return total + 3
//         if (x < y) return total
//         return total + 1
//     }, 0)

// points = (games) => {
//     let results = 0;
//     games.map(item => {
//         if (item[0] > item[2]) {
//             results += 3
//         } else if (item[0] < item[2]) {
//             results
//         } else if (item[0] == item[2]) {
//             results += 1
//         }
//     })
//     return results
// }

// console.log(points(['5:2', '2:1', '2:2', '1:2']))


// function paperWork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }

// console.log(paperWork(5,2))


// arrayMadness = (a, b) => {
//     return (
//         a.reduce((total) => total ** 2) >
//         b.reduce((total) => total ** 3)
//     )
// }

// arrayMadness = (a, b) => {
//     sumA = 0;
//     sumB = 0;
//     for (var i = 0; i < a.length; i++) {
//         sumA += a[i] * 2
//     }
//     for (var j = 0; j < b.length; j++) {
//         sumB += b[j] * 3
//     }
//     return sumA > sumB
// }


// console.log(arrayMadness([1, 2, 3], [4, 5, 6]))
// console.log(arrayMadness([4, 5, 6], [1, 2, 3]))



// function twoSort(s){
//     var sortName = s.sort()[0]
//     var splitName = sortName.split('')
//     var joinName = splitName.join('***')
//     return joinName

// }

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))



// function mergerArrays(arr1, arr2) {
//     var mergeArr = [...arr1].concat([...arr2])
//     return mergeArr.sort()
// }

// function mergeArrays(arr1, arr2) {
//     var newArr = arr1.concat(arr2)
//     var mergeArr = newArr.filter((item, index) => newArr.indexOf(item) === index)
//     var sortArr = mergeArr.sort((a, b) => b - a)
//     return sortArr
// }

// console.log(mergeArrays([1, 3, 4, 5], [9, 8, 7, 6]))