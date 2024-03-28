
// Qs1.Write a JavaScript function that returns array elements larger than a number.
//   const largeNumber = (array,num)=>{
//     for( let i = 0; i<array.length;i++){
//        if(array[i]>num){
//            console.log(array[i]);
//        }
//     }
//   }
//   let array = [23,45,2,78,9,12,55,4]
//  let num = 9
// let n= largeNumber(array,num)
// console.log(n);

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr, num);
console.log(getElements);





// Qs2.Write a JavaScript function to extract unique characters from a string.Example:str=“abcdabcdefgggh” ans=“abcdefgh”

const uniqueChar = (str) => {
    let newString = ' ';
    for (const char of str) {
        if (!newString.includes(char))
            newString = newString + char;
    }
    return newString;
}

let result = uniqueChar('abcdabcdefgggh')
console.log(result);

// Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Example:country=["Australia","Germany","United States of America"]output:"United States of America"

const countryName = (cName) => {
    let countryName = ''
    for (const name of cName) {
        if (name.length > cName.length) {
            countryName = name;
        }
    }
    return countryName;

}

let country = ["Australia", "Germany", "United States of America"]
let largeName = countryName(country)
console.log(largeName);


// Qs4.Write a JavaScript function to count the number of vowels in a String argument.
const findVowel = (str) => {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        if ((str[i] === 'a') || (str[i] === 'e') || (str[i] === 'i') || (str[i] === 'o') || (str[i] === 'u')) {
            count++;
        }
    }
    return count;
}
let string = 'eastdeltauniversity'
let checkVowel = findVowel(string)
console.log('Total vowels are', checkVowel);

// Qs5.Write a JavaScript function to generate a random number within a range (start,end).
const randomNum = (start, end) => {
    let diff = start - end;
    let number = Math.floor(Math.random() * diff) + start
    return number;
}
let res = randomNum(200, 100)
console.log(res);