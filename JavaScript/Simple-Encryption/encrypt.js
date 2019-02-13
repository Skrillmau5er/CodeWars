//URL for challenge: https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
//For building the encrypted string:
//Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
//Do this n times!

//Examples:

//"This is a test!", 1 -> "hsi  etTi sats!"
//"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
//Write two methods:

//function encrypt(text, n)
//function decrypt(encryptedText, n)
//For both methods:
//If the input-string is null or empty return exactly this value!
//If n is <= 0 then return the input text.

function encrypt(text, n) {

    for(var a = 0; a < n; a++){
        evenarr = [];
        oddarr = [];
        for(var i = 0; i < text.length; i++){
            (i%2) ? evenarr.push(text[i]) : oddarr.push(text[i]);
        }
        text = ((evenarr.join('')) + (oddarr.join('')));
    }
    return text;
}

function decrypt(encryptedText, n) {
    var Elen = encryptedText.length;
    var text = "";
    for(var a = 0; a < n; a++){
        evenarr = [];
        oddarr = [];
        for(var i = 0; i < Elen; i++){
            if(i < Math.floor(Elen/2)){
                console.log(encryptedText[i]);
                evenarr.push(encryptedText[i]);
            }
            else{
                console.log(encryptedText[i]);
                oddarr.push(encryptedText[i]);
            }
        }
        for(var i = 0; i < Elen; i++){
            if(i%2){
                text += evenarr.shift();
                console.log(text);
            }
            else{
                text += oddarr.shift();
                console.log(text);
            }
        }
        encryptedText = text;
    }
    return text;
}

decrypt("s eT ashi tist!",2);