// const change = string => {
//     const stringInLowerCase = string.toLowerCase()

//     return 'abcdefghijklmnopqrstuvwxyz'
//         .split('')
//         .map(char => (stringInLowerCase.includes(char) ? 1 : 0))
//         .join('')
// }

// function change(str) {
//     var lowerString = str.toLowerCase();
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     var results = []

//     for (var i = 0; i < alphabet.length; i++) {
//         if (lowerString.indexOf(alphabet.charAt(i)) === -1) {
//             results.push(0)
//         } else {
//             results.push(1)
//         }
//     }
//     return results
// }

// console.log(change("b a"));


// var greet = function (name) {
//     var arr = [0]
//     name = name.split('')

//         name[arr[0]] = name[arr[0]].toUpperCase()

//     return name.join('')
// };

// const greet = name => {
//     return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`
// }

// console.log(greet('riyan'))




// function sortReindeer(reindeerNames) {
//   return [...reindeerNames].sort((firstName, lastName) => firstName.split(' ')[1].localeCompare(lastName.split(' ')[1]))
// }
// console.log(sortReindeer(['Hilmi Arizal', 'Iqbal Nazib', 'Fauzi Imam']))




// function solution(digits){
//   let answer = 0;

//   for (let i=0; i<digits.length; i++){
//     let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
//     if(Number(number) > answer){       //convert to number and compare against answer
//       answer = Number(number);
//     }
//   }
//   return answer;
// }


// solution = (digits) => {
//   let newArr = []
//   for (var i = 0; i<digits.length-4; i++){
//     newArr.push(digits.substr(i, 5))
//   }
//   return Math.max(...newArr)
// }


// console.log(solution('1234567890'))

