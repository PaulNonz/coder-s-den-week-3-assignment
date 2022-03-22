// Q1: check typeof of the following
let firstName = "Paul"
let lastName = "Olu"
let country, city , age , isMarried, year;
city = 'Asaba';
age = 19;
isMarried = true;
year = 2022;
console.log(typeof(firstName, lastName))
console.log(typeof(country))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// Q2:
let string10 = '10'
let num10 = 10
let typeOfString10 = typeof(string10)
let typeOfNum10 = typeof(num10)
console.log(typeOfString10 == num10)     //typeof('10') == 10 -----      false
console.log(typeOfString10 == typeOfNum10)     //typeof('10') == typeof(10) -- false
console.log(string10 == num10)     //('10') == (10) --------       true

// Q3:
console.log(parseInt('9.8') == 10)  //false

// Q4: truthy value vs. falsy values
truValue = 4 > 3
let num = 22n
let string = 'love'
console.log(truValue)               //truthy
console.log(Boolean(num))           //truthy
console.log(Boolean(string))        //truthy
let e = '';
let f = 0n
let g 
console.log(Boolean(e))             //falsy
console.log(Boolean(f))             //falsy
console.log(Boolean(g))             //falsy

// Q5:
console.log(4 > 3)                  //true
console.log(4 >= 3)                 //true
console.log(4<3)                    //false
console.log(4<=3)                   //false
console.log(4 == 4)                 //true
console.log(4 === 4)                //true
console.log(4 != 4)                 //false
console.log(4 !== 4)                //false
console.log(4 != '4')               //false
console.log(4 == '4')               //true
console.log(4 === '4')              //false
let py = 'python'                   //jargon and python falsy statment starts here
let pyLength = py.length          
// console.log(pyLength)
let jar = 'jargon'
let jarLength = jar.length
// console.log(jarLength)
console.log(pyLength != jarLength)  //falsy

// Q6:
console.log(4>3 && 10<12)           //true
console.log(4>3 && 10>12)           //false
console.log(4>3 || 10<12)           //true
console.log(4>3 || 10>12)           //true
console.log(!(4>3) )                //false
console.log(!(4<3))                 //true
console.log(!(false))               //true
console.log(!(4>3 && 10<12))        //false
console.log(!((4>3 && 10>12)))      //true

// Q7:
const date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())











// Personal Task : Inserting a date to a prompt using strings, alert, getdate() request and prompt msgs
// let newNum
// newNum = 
alert('Hello World')
const v = ['Sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dateStatement = v[date.getUTCDay()]
alert(`Today is ${dateStatement},
so let\'s Get started`)






