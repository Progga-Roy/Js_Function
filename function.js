function name() {
    console.log('Progga');
}
name()

const printNumber =()=>{
    for (let i = 0; i<=5; i++) {
       console.log(i);
    }
}
printNumber()

const isAdult =()=>{
    let age = 17

if( age >= 18  ){
   console.log('adult');
}
else{
    console.log('less than 18');
}
}
isAdult()

// Function with argument 
const rollDice =(num1,num2)=>{
 let random = Math.floor(Math.random()*num1) + num2
 return random;
}
 let result = rollDice(6,1)
 console.log('Dice :',result);

 const multipleTable =(n)=>{
    let table = '';
   for( let i = 1; i<=10; i++){
      table += `${n} * ${i} = ${n*i} \n`
   }
   return table;
 
 }
 
 let tableCal = multipleTable(6)
 console.log(tableCal);

//Find average

const findAverage = (a,b,c)=>{
    let average = (a+b+c)/3;
    return average

} 

let aveResult = findAverage(12,35,8)
console.log(aveResult);

const isAdult2 =(age)=>{
   if(age >= 18){
    return 'adult'
   }
   else{
    return 'not adult'
   }
}

console.log(isAdult2(21));
// Sum number between 10 to 10

const sumNumbers =(n)=>{
    let sum = 0;
    for( let i = 1; i<=n; i++){
     sum = sum+i;
    }
    return sum;
}
let summation = sumNumbers(12)
console.log('Summation', summation);

//Concatenate string

const string = ['I','am','a','student','and','my','name','is','Progga']
const concatenateStr =(stringArr)=>{
    let element = '';
    for (let index = 0; index < stringArr.length; index++) {
         element += stringArr[index];
        if(index < stringArr.length -1){
           element += ' '
        }
    }
    return element;
}
console.log(concatenateStr(string))


// Lexical function 
const outerFunction =()=>{
    let x =10 ;
    let y = 5;

    const innerFunction =()=>{
        console.log(x);
        console.log(y);
    }
    innerFunction();
}
outerFunction();


let greet = 'hello'
const changeGreet =()=>{
 greet = 'namaste'
 console.log(greet)

const innerGreet=()=>{
    console.log(greet)
}
}
console.log(greet);
changeGreet()

//Higher order function
const multipleGreet =(func,n)=>{
   for(let i = 0; i<=n; i++){
        func()
   }
} 
const greet1=()=>{
    console.log( 'Higher order :hello');
}
multipleGreet(greet1, 1)


const oddEvenTest =(request)=>{
    if(request === 'odd'){
        return function(n) {
         console.log(!(n%2 ===0))
         
        }
    }
   else if(request === 'even'){
        return function(n) {
         console.log(n%2 ===0)
         
        }
    }
    else{
        console.log('Wrong request');
    }
} 
const oddTester = oddEvenTest('odd')
oddTester(12)
const evenTester = oddEvenTest('even')
evenTester(12)