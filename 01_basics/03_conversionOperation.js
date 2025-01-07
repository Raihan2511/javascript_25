let score = 33

console.log(typeof score)  //number
console.log(typeof(score))  // number

let score1="33"

console.log(typeof score1)  //sring

let valueInNumber= Number(score)
console.log(typeof valueInNumber) //number

/*CONVERSION INTO MIXED STRING-NUMBER INTO NUMBER
 ISSUES THAT IT HAS VALUES 'NAN'*/
let score2= "33abc"
let valueInNumber1= Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)


//CONVERSION INTO BOOLEAN
let isloggedIn=1
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn)


//CONVERSION INTO STRING
let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
