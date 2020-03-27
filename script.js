//PSEUDO CODE

//When the button is pressed, a prompt occurs: 
//Prompt 1: Selecting password criteria
alert("This website will help you find a secure new password.");

// Assignment Code
var generateBtn = document.querySelector("#generate");
// var numbers = [1,2,3,4,5,6,7,8,9,0]
// var letters = 
// var special = 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need to make a generatePassword function
function generatePassword() {
  // console.log("hello");
  // make a confirm to start user through the process
  var criteria = confirm("Press ok to start choosing your password criteria");
  // var numbers = [1,2,3,4,5,6,7,8,9,0]

  //if they select "ok", they can input password length
if (criteria === true) {
    var passLength = prompt("Enter password length. Must be between 8 and 128 characters.");
     //this turns input into a number value
    //their input needs to be stored for later

          if ((passLength >= 8) && (passLength <= 128)) {
            //if their input is between 8 & 128, then they get the next question.
            passLength = parseInt(passLength);
            console.log(passLength);
            var letterTypes = confirm("Would you like Uppercase Letters?");
                if (letterTypes === true) {
                  console.log("I want uppercase letters");
                  // var lowerLetter = confirm("Would you like lowercase letters, too?")
                  // if (lowerLetter === true) {

                  // }

                }
                else if (letterTypes === false) {
                  console.log("I don't want uppercase letters");
                }
          } else {
            alert("No password for you.");
          }
          
    //if they press cancel they get this message:
  } else {
    alert("You sure???")
  }
}