//URL for Challenge: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.

//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//Example

//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    var oddarr = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 == 1){
        oddarr.push(array[i]);
      }
    }
    oddarr.sort(function(a, b){return a-b});
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 == 1){
        array[i] = oddarr.shift();
      }
    }
  }

  sortArray([1, 3, 2, 8, 5, 4, 11]);