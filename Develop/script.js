// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "", "", ""];


//Confirms for characters, letters, and numbers used in password
var alphLowConfirm = confirm("Do you want lower case letters in your password?");
var alphUpperConfirm = confirm("Do you want uppercase letters in your password?");
var numbersConfirm = confirm("Do you want numbers in your password?");
var specCharConfirm = confirm("Do you want special characters in your password?");
var charLength = confirm("How many characters do you want your password to be? (Must be between 8 and 128 characters.")


// Write password to the #password input
function writePassword() {
    var password = generatePassword(arr);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword(arr) {
    for (var i = 0; i < arr.length; i++) {

        console.log(arr[i]);

    }
    console.log("--------------------------")




}


// Call for generatePassword function to run for-loop on each array.
generatePassword(alphabetLower);
generatePassword(alphabetUpper);
generatePassword(numbers);
generatePassword(specCharacters);