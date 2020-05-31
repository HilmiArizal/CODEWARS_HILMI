// const arr = n => (n && Array.from(Array(n).keys())) || [];
// const arr = n => (n ? [...new Array(n).keys()] : [])

// function Arr(n) {
//     var newArr = []
//     for (var i = 0; i < n; i++) {
//         newArr.push(i)
//     }
//     return newArr
// }

// console.log(Arr(5))




// state_capitals = [{ state: 'Maine', capital: 'Augusta' }]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

// country_capitals = [{ country: 'Spain', capital: 'Madrid' }]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

// mixed_capitals = [{ state: 'Maine', capital: 'Augusta' }, { country: 'Spain', capital: "Madrid" }]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

// function capital(capitals) {
//     return capitals.map((item, index) => `${index + 1} The capital of ${item.state || item.country} is ${item.capital}`);
// }

// function capital(capitals) {
//     var results = []
//     for (var i = 0; i < capitals.length; i++) {
//         results.push(`The capital of ${capitals[i].state || capitals[i].country} is ${capitals[i].capital}`);
//     }
//     return results
// }

// const capital = arr => arr.map(({capital, country, state}) => `The capital of ${state || country} is ${capital}`)

// console.log(capital(state_capitals))
// console.log(capital(country_capitals))
// console.log(capital(mixed_capitals))




// function Arr(n) {
//     if ([...new Set(n)].length !== n.length) return [0];

//     let newArr = []
//     n = n.sort((a, b) => a > b);
//     for (var i = 0; i <= n[n.length - 1]; i++) {
//         newArr.push(i)
//     }
//     return newArr.sort((a, b) => (a > b ? -1 : 1))
//     // return newArr
// }

// function Arr(n){
//     const max = Math.max(...n)
//     return n.length === new Set(n).size ? [...Array(max + 1)].map((_, i) => i) : [0];

// }

// console.log(Arr([1, 2, 4, 5, 10, 20, 33]))



