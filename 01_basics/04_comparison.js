console.log(2>3) //output is false(boleean)
console.log(2<3) //output is true(boleean)
console.log(2>=3) //output is false(boleean)
console.log(2<=3) //output is true(boleean)
console.log(2==3) //output is false(boleean)
console.log(2!=3) //output is true(boleean)
console.log(2===3) //output is false(boleean)
console.log(2!==3) //output is true(boleean)
console.log(2=="2") //output is true(boleean)

console.log("2" > 1)   //output is true (basicaly to is converted into string)
console.log("02">1)   //output is true (basicaly to is converted into string)
//typescript not support this type of conversion
//when we compare string with number then string is converted into number
//So,datatype shuoold be same for comparison

//but we can use === for datatype and value comparison
console.log("2"==2) //output is true
console.log("2"===2) //output is false

//problem of null value is not equal to 0
console.log(null==0) //output is false
console.log(null>0) //output is false
console.log(null>=0) //output is true

//problem of undefined value is not equal to 0
console.log(undefined==0) //output is false
console.log(undefined>0) //output is false
console.log(undefined>=0) //output is false
console.log(undefined<=0) //output is false
console.log(undefined<0) //output is false
console.log(undefined!=0) //output is true
//always false when we compare undefined with any number
