const items = [{price: 10.99}, {price:5.99}, {price:29.99}];
const sum = items.reduce((totalPrice, item) => totalPrice + item.price, 0);

console.log(sum);

const colors = ["Red", "Yellow", "Blue", "Orange", "Violet"];
colors.reverse();

const points = [1, 245, 73, 5, 56];
points.sort(function(a, b){return a-b});

const fruits = [
    {type: "apples", pieces: 5},
    {type: "bananas", pieces: 8},
    {type: "oranges", pieces: 14},
    {type: "pears", pieces: 12}
]
fruits.sort(function(a,b){return a.pieces - b.pieces})


//Given an array and chunk size divide the array into subarrays where each subarray is of length is the chunk size.
//[(1,2,3,4,5,6,7),3] ===[[1,2,3], [3,4,5],[6,7]]
//([1,2,3,4,5,6,7],1) ===[[1],[2],[3],[5],[7]]

function chunkanArray( array, size){
    let chunks=[]
    let index=0;
    while(index<array.lenght){
        chunks.push(array.slice(index, index+size))
        index +=size
    }
    return chunks
}

console.log(chunkanArray([1,2,3,4,5,6,7]),3);
console.log(chunkanArray([1,2,3,5,6,7]),1);


//Given an integer, return an integer that is reverse or ordering the numbers
//500=5
//-56 = -65
// -90 = -9
// 91 = 19

function reverseInteger(num){
    let digits= num.toString().split();
    let reversedDigits= digits.reverse();
    let reversedNum = parseInt(reversedDigits.join());
    return reversedNum;
}

let num = 500;
let reversedNum = reverseInteger(num);
console.log(reversedNum);

let num2 = -56;
let reversedNum2 = reverseInteger(num2);
console.log(reversedNum2);

let num3 = -90;
let reversedNum3 = reverseInteger(num3);
console.log(reversedNum3);

let num4 = 91;
let reversedNum4 = reverseInteger(num4);
console.log(reversedNum4);

//Write a function that accepts a string and the function should capitalize the first letter of each word in the string then return the results string. eg hello there- Hello There//

function capitalizeSentence(str){
    let Words = str.split (" ");
    let capitalizedWords = Words.map(function(word){
        return word.chartAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
}

let result = capitalizeWords("hello there");
console.log(result);
