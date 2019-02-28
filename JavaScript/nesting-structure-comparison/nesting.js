/*
URL challenge: https://www.codewars.com/kata/nesting-structure-comparison/train/javascript
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

Array.prototype.sameStructureAs = function (other) {
    var a = JSON.stringify(other);
    var b = JSON.stringify(this);
    for(var x in a) if(!(isNaN(a[x]))) a = a.replace(a[x],'n');
    for(var y in b) if(!(isNaN(b[y]))) b = b.replace(b[y],'n');

    var returnVal = (a == b) ? true : false;
    return returnVal;
};

console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));

console.log([1,'[',']'].sameStructureAs( ['[',']',1] ));