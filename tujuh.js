// function one(arr, fnc) {
//     return arr.filter(fnc).length === 1
// }



// console.log(one([3, 8, 0, 4, 2, 6, 2, 1], function (item) {
//     return item < 2
// }))

// console.log(one([3, 8, 0, 4, 2, 6, 2, 1], function (item) {
//     return item % 2
// }))

// console.log(one([3, 8, 0, 4, 2, 6, 2, 1], function (item) {
//     return item > 4
// }))

// greet = (language) => {
//     const base = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     }
//     return base[language]
// }

// console.log(greet('german'))


const fruit = [
    'kiwi',
    'pear',
    'kiwi',
    'banana',
    'melon',
    'banana',
    'melon',
    'pineapple',
    'apple',
    'pineapple',
    'cucumber',
    'pineapple',
    'cucumber',
    'orange',
    'grape',
    'orange',
    'grape',
    'apple',
    'grape',
    'cherry',
    'pear',
    'cherry',
    'pear',
    'kiwi',
    'banana',
    'kiwi',
    'apple',
    'melon',
    'banana',
    'melon',
    'pineapple',
    'melon',
    'pineapple',
    'cucumber',
    'orange',
    'apple',
    'orange',
    'grape',
    'orange',
    'grape',
    'cherry',
    'pear',
    'cherry',
    'pear',
    'apple',
    'pear',
    'kiwi',
    'banana',
    'kiwi',
    'banana',
    'melon',
    'pineapple',
    'melon',
    'apple',
    'cucumber',
    'pineapple',
    'cucumber',
    'orange',
    'cucumber',
    'orange',
    'grape',
    'cherry',
    'apple',
    'cherry',
    'pear',
    'cherry',
    'pear',
    'kiwi',
    'pear',
    'kiwi',
    'banana',
    'apple',
    'banana',
    'melon',
    'pineapple',
    'melon',
    'pineapple',
    'cucumber',
    'pineapple',
    'cucumber',
    'apple',
    'grape',
    'orange',
    'grape',
    'cherry',
    'grape',
    'cherry',
    'pear',
    'cherry',
    'apple',
    'kiwi',
    'banana',
    'kiwi',
    'banana',
    'melon',
    'banana',
    'melon',
    'pineapple',
    'apple',
    'pineapple',
]

function subs(n) {
    if (fruit[n - 2]) return fruit[n - 2]

    let num = n - String(n).split('').reduce((total, value) => total + Number(value), 0)

    while (!fruit[num]){
        num = num - String(num).split('').reduce((total, value) => total + Number(value), 0)
    }

    return n === fruit[n-2] ? fruit[n-2] : 'tidak ada'
}

console.log(subs(20))