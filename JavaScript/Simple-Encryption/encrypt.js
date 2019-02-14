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
    if(text == null) return null;
    if(n > 0){
        for(var a = 0; a < n; a++){
            evenarr = [];
            oddarr = [];
            for(var i = 0; i < text.length; i++){
                (i%2) ? evenarr.push(text[i]) : oddarr.push(text[i]);
            }
            text = ((evenarr.join('')) + (oddarr.join('')));
        }
    }
    return text;
}

function decrypt(encryptedText, n) {
    if(encryptedText == null) return null;

    if(n > 0){
        var Elen = encryptedText.length;
        for(var a = 0; a < n; a++){
            evenarr = [];
            oddarr = [];
            var text = "";
            for(var i = 0; i < Elen; i++){
                (i < Math.floor(Elen/2)) ? evenarr.push(encryptedText[i]) : oddarr.push(encryptedText[i]);
            }
            for(var i = 0; i < Elen; i++){
                (i%2) ? (text += evenarr.shift()) : text += oddarr.shift();
            }
            encryptedText = text;
        }
    }
    return encryptedText;
}

console.log(decrypt("s eT ashi tist!",2));