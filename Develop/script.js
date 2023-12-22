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

  function  findUpperCase(){
    uppercaseCheck = prompt("Do you want uppercase letters in your password? \(Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();

      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Yes or No");
        determineUppercase();

      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;

      }else {
        alert("Please answer Yes or No");
        determineUppercase();

      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;

      }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
      return uppercaseCheck;

  }else {
    alert("Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
  }


  function determineNumbers(){
    numberCheck = prompt("Would you like numbers in your password? \(Yes or No)");
      numberCheck = numberCheck.toLowerCase();

      if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determineNumbers();

  }else if (numberCheck === "yes" || numberCheck ==="y"){
    numberCheck = false;
    return numberCheck;

  }else {
    alert("Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

  function determineSpecial(){
    specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
      specialCheck = specialCheck.toLowerCase();

      if (specialCheck === null || specialCheck === ""){
        alert("Please answer Yes or No");
        determineSpecial();

      }else if (specialCheck === "yes" || specialCheck ==="y"){
        specialCheck = true;
        return specialCheck;

      }else if (specialCheck === "no" || specialCheck ==="n"){
        specialCheck = false;
        return specialCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineSpecial();
      }
      return specialCheck;
  }

  function generatePassword(){
    determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;

  }else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

for(var i = 0; i < passwordLength; i++){
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
return password;
}

// Write password to the #password input
function writePassword() {
var password1 = "";
password1 = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password1;
}


  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
