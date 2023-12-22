// Assignment Code
var generateBtn = document.querySelector("#generate");
var charNumb = "0123456789";
var charLower = "abcdefghijklmnopqrstuvwxyz"
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChar = "!@#$%^&*()_-+={[}]:;'<,>.?/~`"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

function findLength();
  if (passwordLength<8) {
    alert("Password length must be between 8 and 128 characters long");
    findLength();
  } else if (passwordLength>128) {
    alert("Password length must be between 8 and 128 characters long");
    findLength;
  } else {
    alert("Way to go! What characters would you like to use?")
  }

  }

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
