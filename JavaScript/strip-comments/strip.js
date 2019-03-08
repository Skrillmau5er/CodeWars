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
    var j = 0;
    while(input.indexOf(markers[i]) != -1 && j < 2){
      console.log(i);
      let first = input.substring(0,input.indexOf(markers[i]));
      let second = input.substring(input.indexOf(markers[i]), (input.indexOf('\n',input.indexOf(markers[i])) > 0) ? input.indexOf('\n') : input.length);
      if(input.indexOf('\n',input.indexOf(markers[i]))){
        var third = input.substring(input.indexOf('\n', input.indexOf(markers[i])), input.length);
      }
      input = first + third;
      console.log("first: " + first);
      console.log("second: " + second);
      console.log("third: " + third);
      console.log("\nInput: " + JSON.stringify(input));
      third = '';
      j++;
    }
}
};

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);