// Q1:
let b
let h
b = prompt('Q1: Pls insert value of base here')
h = prompt('Q1: Insert value of height here')
let area = 0.5 * b * h
alert(`The Area is: ${area}`)
console.log(`The Area is ${area}`)

// Q2:
let sideA, sideB,sideC;
sideA = prompt('Q2: Enter Side A of triangle', 'Insert Value here')
sideB = prompt('Q2: Enter side B of triangle', 'Insert Value here')
sideC = prompt('Q2: Enter side C of triangle', 'Insert Value here')
let PerValue = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(alert(`The Perimeter of the triangle is ${PerValue}`))

// Q3:
let length, width;
length = prompt('Q3: Length of Rectangle', 'Insert number here')
width = prompt('Q3: Width of Rectangle', 'Insert Number here')
console.log(length)
console.log(width)
let perimeter = parseInt(2) * (parseInt(length) + parseInt(width))
let Area = length * width 
alert(`The Area of Rectangle is ${Area}
And perimeter is ${perimeter}`)

// Q4:
let pi = Math.PI
let radius = prompt('Q4: Radius of a circle', 'Insert r Value here')
let areaOfCir = pi * radius * radius
let cirOfCIr = 2 * pi * radius
alert(`The Area of Circle is ${areaOfCir} 
The Circumference of Circle Is ${cirOfCIr}`)

// Q5: find slope, y-intecept(when x=0), and x-inetercept (when y=0). 
// from the equation y=mx+c || y=2x-2 which means that m=2 and c=-2 
let M, Y, C, X, button;
M = 2
C = -2
Y = M * X + C;
let slope = M
let xInter= 0 -(C/M)           //when y = 0
let yInter= M * 0 + C;         //when x = 0
console.log(`slope Value is ${slope}`)                //Ans = 2
console.log(`x-intercept is ${xInter}`)               //Ans = 1
console.log(`x-intercept is ${yInter}`)               //Ans = -2

// using the html method

let mInput = document.getElementById("mValue").value;
let cInput = document.getElementById('#cValue');
// let slopp = 

button = document.querySelector('.btn')
document.getElementById("btn").onclick =
function getInputValue() {
    var inputValue = document.getElementById("mValue").value;
    var output = document.getElementById("ans");
    output.value = inputValue;
    console.log(mInput)
}
console.log(mInput)



// console.log(mInput, cInput, ans, ans1, ans2 )
// button.addEventListener('click', () => {
// alert(`Ans: ${slope}`)
// })




// Q6: if slope (m) = (y2-y1)/(x-x21), find m
// note point1 is (x1 , y1) and point2 is (x2 , y2), where point1(2,2) & point2(6,10) 
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = (y2-y1)/(x2-x1)
let slope2 = m
console.log(`slope Value is ${slope2}`)                //Ans = 2


// Q7: compare slope in Q5 and Q6
console.log(Boolean(slope == slope2))
console.log(Boolean(slope === slope2))

// Q8:
let x, y;
x = prompt("Ques8: Calc the Quadratic Equation y=x^2 + (6*x) + 9", "Insert the value of x here")
y = (Math.pow(x,2)) + (6 * x) + 9;
console.log(y)
alert(`The Value of y is ${y}`)
// let y0 = prompt('zero value of x', 'enter value here')
// let x0 = ((y0-9)/x0) + 6
// console.log(x0)

// Q9: 
let hrs = prompt("Q9: Calculate your Weekly Earnings ", "Enter hours")
let ratePerHrs = prompt("Q9: Calculate Weekly Earnings(cont.)", "Enter Rate per Hour")
let wklyEarnings = hrs * ratePerHrs
let WeeklyEarnings = alert(`Your weekly earning is #${wklyEarnings}`)

// Q10:
let myName = prompt('Q10: Is the Length of your Name long or short?', 'Pls Enter Name')
let lengthOfName = myName.length
console.log(lengthOfName)
if (lengthOfName > 7) {
    alert(`Your name is Long`)
} else {
    alert(`Your name is short`)
}

// Q11: 
let yourName = prompt('Q11: What\'s your first name?', 'Insert here')
let familyName = prompt('Q11: What\'s your family name?', 'Insert here')
let yoN = yourName.length;
let faN = familyName.length;

if (yoN > faN) {
    console.log(`Your first name, ${yourName} is longer than your family name, ${familyName}`)
    alert(`Your first name, ${yourName} is longer than your family name, ${familyName}`)
} else {
    console.log(`Your first name, ${yourName} is shorter than your family name, ${familyName}`)
    alert(`Your first name, ${yourName} is shorter than your family name, ${familyName}`)
}

// Q12:
let myAge, yourAge;
myAge = prompt('Q12: The difference in age', 'myAge: preferably 250')
yourAge = prompt('Q12: The difference in age (cont.)', 'yourAge: preferably 25')
let differenceInAge = myAge - yourAge
console.log(differenceInAge)
alert(`I am ${differenceInAge} years older than you.`)

// Q13: 
let birthYear = prompt('Q13: Driving test (What is your birth year?)', 'Enter birth year') 
const nowYear =  new Date();
let thisYear = nowYear.getFullYear()
console.log(nowYear.getSeconds())
let dateCalc =  thisYear - birthYear
let markDate = 18-dateCalc
// alert message: 
if (dateCalc >= 18) {
    alert(`you are ${dateCalc}. You are old enough to drive`)
} else {
    alert(`You are ${dateCalc}. You will not be allowed to drive after ${markDate} years`)
}

// Q14: calc num of seconds a person can live after x number of years
let numOfYear, secsLivedTillNow, parseNumOfYear;
numOfYear = prompt('Q14: Whats the number of years you\'ve lived?' , 'Insert here')
parseNumOfYear = parseInt(numOfYear)
secsLivedTillNow = 31536000 * parseNumOfYear   //31,536, 000 is the number of secs in a year
console.log(`You lived ${secsLivedTillNow} seconds.`)
alert(`You lived ${secsLivedTillNow} seconds.`)

// // Q15: 
// const nowYear =  new Date(); this has already been declared in Q13
let yearss = nowYear.getUTCFullYear()
let monthss = nowYear.getUTCMonth()+1
let datess = nowYear.getDate()
let hourss = nowYear.getHours()
let minutess = nowYear.getMinutes()

console.log(`${year}-0${monthss}-${datess} ${hourss}:${minutess}`)      //YYYY-MM-DD HH:mm
console.log(`${datess}-0${monthss}-${year} ${hourss}:${minutess}`)      //DD-MM-YYYY HH:mm
console.log(`${year}/0${monthss}/${datess} ${hourss}:${minutess}`)      //DD/MM/YYYY HH:mm












