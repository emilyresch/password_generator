//PSEUDO CODE

//document ready?
//When the button is pressed, a prompt occurs: 
//Prompt 1: Selecting password criteria

// Assignment Code


var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

