/*
URL Challenge: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

var moveZeros = function (arr) {
    fixedArr = [];
    zeroArr = [];
    for(let i in arr){
        (arr[i] === 0) ? zeroArr.push(0) : fixedArr.push(arr[i]);
    }
    while(zeroArr.length > 0){
        fixedArr.push(zeroArr.pop());
    }
    return fixedArr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));