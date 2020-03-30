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
///////////////////////////////////////////////////////////////////////////////////////////////
// var answers = [];



///////////////////////////////////////////////////////////////////////////////////////////////
//need to make a generatePassword function
function generatePassword() {

  var criteria = confirm("Press ok to start choosing your password criteria");

  //if they select "ok", they can input password length
  if (criteria === true) {
    var passLength = Number(prompt("Enter password length. Must be between 8 and 128 characters."));
    //this turns input into a number value
    //their input needs to be stored for later

    if ((passLength >= 8) && (passLength <= 128)) {
      //if their input is between 8 & 128, then they get the next question.
      // passLength = parseInt(passLength);
      //need to store length specified to determine password length

      console.log(passLength);
      //object containing questions and possible answers
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

      var answers = {
        upperCase: null,
        lowerCase: null,
        special: null,
        numbers: null



      };

      var charSet = {
        upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        special: ["!", "@", "#", "$", "%", "&"],
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

      };

      for (var i = 0; i < questions.length; i++) {
        var result = confirm(questions[i].q);
        // if (result == questions[i].a) 
        if (i === 0) {
          answers.upperCase = result; //assigning result to key value 
        } else if (i === 1) {
          answers.lowerCase = result;
        } else if (i === 2) {
          answers.special = result;

        } else if (i === 3) {
          answers.numbers = result;
        }

        // } else if (result == questions[i].b) {
        //   answers.push(result);
        //   console.log(answers);

        // }

      }

      //take given answers and combine correct arrays
      var finalPassword = "";
      var newArray = []

      if (answers.upperCase === true) {
        for(var i=0;i<charSet.upperCase.length; i++){
          newArray.push(charSet.upperCase[i]);
        }
        
      }
      if (answers.lowerCase === true) {
        for(var i=0;i<charSet.lowerCase.length; i++){
        newArray.push(charSet.lowerCase[i]);
        }
      }
      if (answers.special === true) {
        for(var i=0;i<charSet.special.length; i++){
        newArray.push(charSet.special[i]);
        }
      }
      if (answers.numbers === true) {
        for(var i=0;i<charSet.numbers.length; i++){
        newArray.push(charSet.numbers[i]);
        }

      }

      

      console.log(newArray);


      for (var i = 0; i < passLength; i++) {
        // console.log(finalPassword);
        //grab random character from combined arrays until designated length is hit
        //push this character into a string. 
        //first grab with math.random and store index, 
        // get random index of newArray, 

        var generatedIndex = Math.floor(Math.random() * newArray.length);
        finalPassword += newArray[generatedIndex];
        // console.log(finalPassword);
       

        // finalPassword+= newArray[generated #] 

      }
      return finalPassword;
      // console.log(finalPassword);




      // console.log(answers);

      //use password length determined by user 
      //concat chosen character types
      //need something to search within those arrays 
      //for loop
      //after a character is randomly chosen, needs to be stored somewhere/pushed to new password string
      //write password







    } else {
      alert("You must enter a number between 8 and 128. Press 'Generate Password' to restart");
    }

    //if they press cancel they get this message:
  } else {
    alert("You shall not pass.....word.")
  }
}


// a: concat(upperCase, lowerCase),
// b: concat(upperCase, lowerCase, numbers),
// c: concat(upperCase, lowerCase, numbers, special),
// d: concat(upperCase, numbers),
// e: concat(upperCase, numbers, special),
// f: concat(upperCase, special),
// g: concat(lowerCase, numbers, special),
// h: concat(lowerCase, numbers),
// i: concat(lowerCase, special),
// j: concat(numbers, special),

// for (var i = 0; i < answers.length; i++) {
//   if (answers.indexOf[i] === true) {
//     console.log(upperCase);
//   } else if (answers.index[i++] === true) {
//     console.log(lowerCase);
//   } else if (answers.indexOf[i++] === true) {
//     console.log(numbers);
//   } else if (answers.indexOf[i++] === true) {
//     console.log(special);
//   } else {
//     console.log("not a good password")
//   }
// }