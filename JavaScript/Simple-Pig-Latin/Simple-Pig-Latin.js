//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//Examples
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    var arr = str.split(' ');
    for(x in arr){
      var punc = '';
      for(y in arr[x]){
        if(arr[x].charCodeAt(y) < 65){
          punc = arr[x][y]
          arr[x] = arr[x].slice(0 ,y - 1)
        }
      }
      if(arr[x].charCodeAt(0) > 64){
        var pig = arr[x].slice(0,1);

        pig += "ay";
      }
      else{
        pig = '';
      }
      arr[x] = arr[x].slice(1,arr[x].length) + pig + punc;
    }
    return arr.join(" ");
  }

  console.log(pigIt("Hello world !"));