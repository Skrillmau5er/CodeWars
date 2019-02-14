/*
URL to Challenge:https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using "encode" in Python is considered cheating.
*/
function rot13(message){
    var asciiVal;
    var modCode;
    var newMessage = [];
    for(var x = 0; x < message.length; x++){
        asciiVal = message.charCodeAt(x);
        if(message[x].match(/[a-z]/i)){
            if(asciiVal < 91){
                newMessage.push(String.fromCharCode((asciiVal > 77) ? modCode = asciiVal - 26 + 13 : modCode = (asciiVal + 13)));
            }
            else{
                newMessage.push(String.fromCharCode((asciiVal > 109) ? modCode = asciiVal - 26 + 13 : modCode = (asciiVal + 13)));
            }
        }
        else{
            newMessage.push(message[x]);
        }
    }
    return newMessage.join('');   
}

console.log(rot13("abcdefghijklmnopqrstuvwxyz"));