/*
URL to challenge: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  for(var i in markers){
    while(input.indexOf(markers[i])){
      let first = input.substring(0,input.indexOf(markers[i]));
      let second = input.substring(input.indexOf(markers[i]), (input.indexOf('\n')) ? input.indexOf('\n') : input.length);
      if(input.indexOf('\n')){
        var third = input.substring(input.indexOf('\n') + 1, input.length);
      }
      input = first + third;
      console.log(first);
      console.log(second);
      console.log(third);
    }
  }
};

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);