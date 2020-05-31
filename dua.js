// correctPolishLetters = (string) => {
//     var r = string.toLowerCase();
//     r = r.replace(new RegExp(/[ą]/g), "a")
//     r = r.replace(new RegExp(/[ć]/g), "c")
//     r = r.replace(new RegExp(/[ę]/g), "e")
//     r = r.replace(new RegExp(/[ł]/g), "l")
//     r = r.replace(new RegExp(/[ń]/g), "n")
//     r = r.replace(new RegExp(/[ó]/g), "o")
//     r = r.replace(new RegExp(/[ś]/g), "s")
//     r = r.replace(new RegExp(/[źż]/g), "z")
//     return r
// }


// function correctPolishLetters(s) {
//     return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
// }


// function correctPolishLetters(string) {
//     let letters = {
//         ą: "a",
//         ć: "c",
//         ę: "e",
//         ł: "l",
//         ń: "n",
//         ó: "o",
//         ś: "s",
//         ź: "z",
//         ż: "z"
//     };
//     for (let i in letters) {
//         string = string.split('').map(e => e == i ? letters[i] : e).join('');
//     }
//     return string;
// }

// console.log(correctPolishLetters('Jędrzej Błądziński'))




// strCount = (str, letter) => {
//     var count = 0
//     var strSplit = str.split('')
//     for (var i = 0; i < strSplit.length; i++) {
//         if(strSplit[i] == letter){
//             count++;
//         }
//     }
//     return count
// }


// strCount = (str, letter) => {
//     return str.split(letter).length-1
// }

// strCount = (str, letter) => {
//     var str = str.toLowerCase()
//     return str.split("").filter(x => x == letter)
// }

// strCount = (str, letter) => {
//     return str.includes(letter)
// }

// console.log(strCount('Hilmi Arizal Santoso', 'm'))



// testEven = (n) => {
//     if (n % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// testEven = (n) => {
//     return n % 2 === 0
// }

// console.log(testEven(0.5))
// console.log(testEven(-4))
// console.log(testEven(1))
// console.log(testEven(2))




// zeroFuel = (jarakpompa, mpg, galon) => {
//     var result = mpg * galon
//     if (result >= jarakpompa) {
//         return true
//     } else if (result <= jarakpompa) {
//         return false
//     }
// }

// zeroFuel = (jarakpompa, mpg, galon) => {
//     return mpg * galon >= jarakpompa
// }

// console.log(zeroFuel(50, 25, 2))
// console.log(zeroFuel(50, 25, 1))
// console.log(zeroFuel(50, 50, 1))
// console.log(zeroFuel(100, 50, 1))



// check = (a, x) => {
//     return a.includes(x)
// }

// check = (a, x) => {
//     return a.indexOf(x) !== -1
// }

// console.log(check([66, 101, 'hey', 'kamu', 1], 'kan'))




// differenceAges = (ages) => {
//     var arrMax = Math.max(...ages)
//     var arrMin = Math.min(...ages)
//     var total =  arrMax - arrMin
//     return [arrMin, arrMax, total]
// }

// console.log(differenceAges([15, 6, 38, 35]))