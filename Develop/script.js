// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


//Created function for generatePassword
function generatePassword() {

    //Set isValid to false as a measure to kep user from using value of < 8 and > 128
    var isValid = false;

    //Set prompt to only accept values between 8 and 128.
    do {
        var userLength = prompt("Enter a number between 8 and 128");
        userLength = parseInt(userLength);
        // Character length parameters set
        if ((userLength < 8) || (userLength > 128) || (isNaN(userLength))) {
            alert("Please enter a valid number between 8 and 128.");
        } else {
            isValid = true;
        }
    }
    while (!isValid);

    //Arrays of needed characters.
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "", "", ""];

    //Redefine value of isValid to false as measure to make user choose one character type.
    isValid = false;

    do {
        //Confirm for characters, letters, and numbers used in password.
        var alphLowConfirm = confirm("Do you want lower case letters in your password?");
        var alphUpperConfirm = confirm("Do you want uppercase letters in your password?");
        var numbersConfirm = confirm("Do you want numbers in your password?");
        var specCharConfirm = confirm("Do you want special characters in your password?");

        //Create condition so that user must enter one confirm measure as true.
        if ((alphLowConfirm == false) && (alphUpperConfirm == false) && (numbersConfirm == false) && (specCharConfirm == false)) {
            alert("Please select at least one type of character to use.");
        } else {
            isValid = true;
        }
    } while (!isValid);


    //Created empty array to store values in for generated password.
    var passArray = [];


    //Create conditions that will add confirmed arrays to password generation
    if (alphLowConfirm == true) {
        for (var i of alphabet)
            passArray.push(i);
    }
    if (alphUpperConfirm == true) {
        for (var i of alphabet) {
            passArray.push(i.toUpperCase());
        }
    }
    if (numbersConfirm == true) {
        for (var i of numbers)
            passArray.push(i);
    }
    if (specCharConfirm == true) {
        for (var i of specCharacters)
            passArray.push(i);
    }


    //Value to return for password generate.
    var returnPass = "";

    //Will generate password through randomly collecting array values
    for (var i = 0; i < userLength; i++) {
        returnPass += passArray[Math.floor(Math.random() * passArray.length)];
    }

    return returnPass;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);