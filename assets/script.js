var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0 '];
var specialCharacters = ['!', '@', '#', '$', '^', '%', '%', '&'];
var lowerCase = ['a', 'b', 'c', 'd', 'l', 'f', 'k', 's'];
var upperCase = ['A', 'B', 'C', 'D', 'L', 'F', 'K', 'S'];


var generateBtn = document.querySelector("#generate");

function getPromtOptions() {
    var length = parseInt(prompt('Please enter a number that represents the length you want your password to be'), 10);
    if (Number.isNaN(length)) {
        alert('You must enter a number');
        return null;
    }
    if (length < 8) {
        alert('Your password length cannot be less than 8 characters');
        return null;
    }
    if (length > 128) {
        alert('Your password length cannot be more than 128 characters');
        return null;
    }
    var hasNumericCharacters = confirm('Click OK if you want to confirm numeric characters');
    var hasSpecialCharacters = confirm('Click OK if you want to confirm special characters');
    var hasLowercaseCharacters = confirm('Click OK if you want to confirm lowercase characters');
    var hasUppercaseCharacters = confirm('Click OK if you want to confirm uppercase characters');
    if (hasNumericCharacters === false &&
        hasSpecialCharacters === false &&
        hasLowercaseCharacters === false &&
        hasUppercaseCharacters === false) {
        alert('You must enter one character type');
        return null;

    }
    var passwordOption = {
        length: length,
        hasNumericCharacters: hasNumericCharacters,
        hasSpecialCharacters: hasSpecialCharacters,
        hasLowercaseCharacters: hasLowercaseCharacters,
        hasUppercaseCharacters: hasUppercaseCharacters,
    };
    return passwordOption;
}
//wirte a function to get a random function from an array
//incldue math.floor outside of a math.random
function getRandomNumber = [Math.floor(Math.random() * max)];


//generate a password with user input
function generatePassword() {
    var options = getPromtOptions();
    var result = [];
    var possibleCharacters = [];
    var guaranteeCharacters = [];

    if (options.hasNumericCharacters.concat()) {

    }
    if (options.hasSpecialCharacters.concat()) {

    }
    if (options.hasLowercaseCharacters.concat()) {

    }
    if (options.hasUppercaseCharacters.concat()) {

    }
}

//.push to push into special characters to guarantee characters - do it X4
//iterate for loops 

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// if length of password is >= 8 and <= 128,
// the password is valid
// else
// the password is invalid
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// var lowercase = true/false???
// var uppercase = true/false???
// var numeric = true/false???
// var special = true/false???
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// alert("Password is: ....");

generateBtn.addEventListener("click", writePassword);