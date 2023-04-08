function validatePassword (str1, str2) {

    // check if matching
    if (str1 == str2) {
    } else {
        return false;
    }

    // check if at least 8
    if (str1.length >= 8) {
    } else {
        return false;
    }

    // check if has a number
    if (!hasNumber(str1)) {
        return false;
    }

    // check if has an uppercase
    if (!hasUpperCase(str1)) {
        return false;
    }

    // check if has a lowercase
    if (!hasLowerCase(str1)) {
        return false;
    }
    return true;
}

function hasNumber(str) {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(str[i] == numbers[j].toString()) {
                return true;
            }
        }
    } 
    return false;
}


function hasUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if(isNaN(str[i])) {
            if (str[i] === str[i].toUpperCase()) {  
                return true;
            }  
        } 
    }
    return false;
}

function hasLowerCase(str) {
    for (let i = 0; i < str.length; i++) {
        if(isNaN(str[i])) {
            if (str[i] === str[i].toLowerCase()) {  
                return true;
            } 
        } 
    }
    return false; 
}

function reversePassword(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString
}

function storePassword(name, pass1, pass2) {

}



// console.log(validatePassword("helloworld", "hello"))     // returns false
// console.log(validatePassword("hello", "hello"))    	  // returns false
// console.log(validatePassword("hello1234", "hello1234"))  // returns false
// console.log(validatePassword("Hello1234", "Hello1234"))  // returns true
// console.log(validatePassword("HELLO1234", "HELLO1234"))  // returns false



/*
The two passwords match;
the password has at least 8 characters; and
the password has at least 1 number, 1 uppercase character, and 1 lowercase character 

*/

