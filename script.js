//PSEUDO CODE

//When the button is pressed, a prompt occurs: 
//Prompt 1: Selecting password criteria
alert("This website will help you find a secure new password.");

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
      //ask if they want uppercase
      var letterTypes = confirm("Would you like Uppercase Letters?");
      //if so, 

      if (letterTypes === true) {
        // console.log("I want uppercase letters");
        //ask if they also want lowercase
        var lowerLetter = confirm("Would you like lowercase letters?");
        //if so, 
        if (lowerLetter === true) {
          //ask if they want special characters
          var specialChar1 = confirm("Would you like special characters?");
          //if so
          if (specialChar1 === true) {
            //if so, ask if they want numbers
            var nums1 = confirm("Would you like numbers?");
            // console.log("upper, lower, and special")
            if (nums1 === true) {
              //GET PASSWORD 
              console.log("uppercase, lower, special, and numbers");
            } else {
              //GET PASSWORD WITHOUT NUMBERS
              console.log("uppercase, lower, special and NO numbers");
            }
          } else {
            var nums6 = confirm("Would you like numbers?");
            if (nums6 === true) {
              console.log("password numbers and no special");
            } else {
              console.log("password no numbers")
            }
          }
        } else {
          var specialChar3 = confirm("Would you like special characters?");
          //if so
          if (specialChar3 === true) {
            //if so, ask if they want numbers
            var nums4 = confirm("Would you like numbers?");
            // console.log("upper, lower, and special")
            if (nums4 === true) {
              console.log("uppercase, lower, special, and numbers");
            } else {
              console.log("uppercase, lower, special, NO numbers");
            }

          } else {
            var nums7 = confirm("Would you like numbers?");
            if (nums7 === true) {
              console.log("uppercase, lower, no special, numbers");
            } else {
              console.log("uppercase, lower, no special, no numbers");
            }
          }
        }

        //if they don't want uppercase
      } else {
        //ask if they want special characters
        var specialChar2 = confirm("Would you like special characters?");
        if (specialChar2 === true) {
          var nums3 = confirm("Would you like numbers?");
          if (nums3 === true) {
            console.log("lowercase and numbers");
          } else {
            console.log("no upper, lowercase, no special, no numbers")
          }

        }
      }
    } else {
      alert("You must enter a number between 8 and 128. Press 'Generate Password' to restart");
    }

    //if they press cancel they get this message:
  } else {
    alert("You shall not pass.....word.")
  }
}