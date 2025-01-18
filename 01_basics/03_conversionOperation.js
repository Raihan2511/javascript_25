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



// @@@@@@@@@@@@@@@@@@@@@@@ OPERATIONS @@@@@@@@@@@@@@@@@@@@@@@@@


let value= 3
let negvalue= -value
console.log("@@@@@@@@@@@@@@@@@@@@@")
console.log(negvalue)


// BASIC MATH OPERATIONS
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)// power of 2

let str1="HELLO,"
let str2=" WORLD" //space is also counted
let str3= str1+str2 //concatenation

console.log(str3)
//we adding space in the str2=" WORLD" because conactecation is done with space
let str4="RAIHAN"
let str5= str1+" "+str4 //concatenation  with space
console.log(str5)

//toPremitive conversion
console.log("1"+2) //output is12
console.log(1+"2")// output is 12
console.log(1+2) //output is 3
console.log("1"+2+3) //output is 123
console.log(1+2+"3")//output is 33

//don't write this way this is not good practice
console.log(true) //output is true
console.log(+true) //output is 1
console.log(+"") //output is 0


//preincrement and postincrement
let a=1
a++
console.log(a) //output is 2

let b=1
++b
console.log(a) //output is 2
