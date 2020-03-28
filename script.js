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
      var questions = [

        {
          q: "Would you like uppercase letters?",
          a: true,
          b: false
        },
        {
          q: "Would you like lowercase letters?",
          a: true,
          b: false
        },
      
        {
          q: "Would you like special characters?",
          a: true,
          b: false
        },
      
        {
          q: "Would you like numbers?",
          a: true,
          b: false
        },
      
      ]
     
      var answers = [];
      
      for(var i=0; i<questions.length;i++){
        var result = confirm(questions[i].q);
        if (result == questions[i].a){
          answers.push(result);
          console.log(answers);
        }else if (result == questions[i].b) {
          answers.push(result);
          console.log(answers);
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

function determinePassword () {

  
}


