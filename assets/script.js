var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0 '];
var specialCharacters = ['!', '@', '#', '$', '^', '%', '%', '&'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'l', 'f', 'k', 's'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'L', 'F', 'K', 'S'];


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

function getRandom(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
    var options = getPromtOptions();
    var possibleCharacters = [];


    if (options.hasNumericCharacters) {
        possibleCharacters =
            possibleCharacters.concat(specialCharacters);
    }
    if (options.hasSpecialCharacters) {
        possibleCharacters =
            possibleCharacters.concat(numericCharacters);

    }
    if (options.hasLowercaseCharacters) {
        possibleCharacters =
            possibleCharacters.concat(lowercaseCharacters);

    }
    if (options.hasUppercaseCharacters) {
        possibleCharacters =
            possibleCharacters.concat(uppercaseCharacters);


    }
    window.debugpossible = possibleCharacters
    var pass = '';
    for (var i = 0; i < options.length; i++) {
        pass = pass + possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    }
    alert('Password is:' + pass);
    return pass;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);