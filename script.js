var generateBtn = document.querySelector("#generate");
var charNumb = "0123456789";
var charLower = "abcdefghijklmnopqrstuvwxyz"
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChar = "!@#$%^&*()_-+={[}]:;'<,>.?/~`"
var findLength;
var findUpperCase;
var findLowerCase;
var findSpecial;
var findNumbers;


function determineLength(){
  findLength = prompt("How long you want that thang to be?")
  if (findLength<8) {
    alert("Password length must be between 8 and 128 characters long");
    findLength();
  } else if (findLength>128) {
    alert("Password length must be between 8 and 128 characters long");
    findLength;
  } else {
    alert("Niiiiice! What characters would you like to use?")
  }
  return findLength;
}

  function  determineUppercase(){
    findUpperCase = prompt("We thinkin' uppercase? \(Yes or No)");
      findUpperCase = findUpperCase.toLowerCase();

      if (findUpperCase === null || findUpperCase === ""){
        alert("Yes or No");
        determineUppercase();

      }else if (findUpperCase === "yes" || findUpperCase ==="y"){
        findUpperCase = true;
        return findUpperCase;

      }else if (findUpperCase === "no" || findUpperCase ==="n"){
        findUpperCase = false;
      return findUpperCase;

      }else {
        alert("Yes or No");
        determineUppercase();
      }
      return findUpperCase;
    }

    function  determineLowercase(){
      findLowerCase = prompt("How's about lowercase? \(Yes or No)");
        findLowerCase = findLowerCase.toLowerCase();
 
  
        if (findLowerCase === "yes" || findLowerCase ==="y"){
          findLowerCase = true;
          return findLowerCase;
  
        }else if (findLowerCase === "no" || findLowerCase ==="n"){
          findLowerCase = false;
        return findLowerCase;
  
        }else {
          alert("Yes or No");
          determineLowercase();
        }
        return findLowerCase;
    }


  function determineNumbers(){
    findNumbers = prompt("Would you like numbers in your password? \(Yes or No)");
      findNumbers = findNumbers.toLowerCase();

      if (findNumbers === null || findNumbers === ""){
        alert("Yes or No");
        determineNumbers();

      }else if (findNumbers === "yes" || findNumbers ==="y"){
        findNumbers = true;
        return findNumbers;

      }else if (findNumbers === "no" || findNumbers ==="n"){
        findNumbers = false;
        return findNumbers;

    }else {
      alert("Yes or No");
      determineNumbers();
    }
    return findNumbers;
}

  function determineSpecial(){
    findSpecial = prompt("Want me throw some special characters in there for ya? \n(Yes or No)");
      findSpecial = findSpecial.toLowerCase();

      if (findSpecial === null || findSpecial === ""){
        alert("Please answer Yes or No");
        determineSpecial();

      }else if (findSpecial === "yes" || findSpecial ==="y"){
        findSpecial = true;
        return findSpecial;

      }else if (findSpecial === "no" || findSpecial ==="n"){
        findSpecial = false;
        return findSpecial;
      
      }else {
        alert("Please answer Yes or No");
        determineSpecial();
      }
      return findSpecial;
  }

  function generatePassword(){
  determineLength();
  console.log(findLength);
  determineUppercase();
  console.log(findUpperCase);
  determineLowercase();
  console.log(findUpperCase);
  determineNumbers();
  console.log(findNumbers);
  determineSpecial();
  console.log(findSpecial);

  var characters = charLower;
  var password = "";

  if (findUpperCase && findLowerCase && findNumbers && findSpecial){
    characters += charUpper + charLower + charNumb + specChar;

  }else if (findUpperCase && findLowerCase && findNumbers){
    characters += charUpper + charLower && charNumb;
    
  }else if (findUpperCase && findLowerCase && findSpecial){
    characters += charUpper + charLower && specChar;
    
  }else if (findUpperCase && findSpecial && findNumbers){
    characters += charUpper + specChar && charNumb;
    
  }else if (findLowerCase && findSpecial && findNumbers){
    characters += charLower + specChar && charNumb;

  }else if (findUpperCase && findNumbers){
  characters += charUpper + charNumb;

}else if (findNumbers && findSpecial){
  characters += charNumb + specChar;

}else if (findUpperCase && findSpecial){
  characters += charUpper + specChar;

}else if (findLowerCase && findNumbers){
  characters += charLower + charNumb;

}else if (findLowerCase && findSpecial){
  characters += charLower + specChar;

}else if (findLowerCase && findUpperCase){
  characters += charLower + charUpper;

}else if (findUpperCase){
  characters += charUpper;

}else if(findNumbers){
  characters += charNumb;

}else if (findSpecial){
  characters += specChar;

}else if (findLowerCase){
  characters += charLower;

}else{
  characters === lowercaseChar;
}

for (var i = 0; i < findLength; i++){
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}



document.getElementById("password").value = "Your Secure Password";

generateBtn.addEventListener("click", writePassword);
