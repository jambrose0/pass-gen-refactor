// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = {
  lower: "abcdefghijklmnopqrstuvwxys",
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  special: '!@#$%^&*()'
};

function generatePassword() {
  var password = "";
  var actualPassword = '';
  var passChar = "";
  var charLength = prompt("How long would you like your password? Must be between 8 and 128 characters");
  var wantsSpecial = window.confirm("Would you like special characters?");
  var wantsUpper = window.confirm("Would you like Uppercase letters?");
  var wantsLower = window.confirm("Would you like lowercase letters?");
  var wantsNumber = window.confirm("Would you like numbers?");
  //too small or large of password characters
  while (charLength < 8 || charLength > 128) {
    charLength= prompt("Your password must be between 8 and 128 characters");
     }
  //if characters fit in the range
  if (wantsSpecial) {
    password += char.special;
    }
  if (wantsUpper) {
    password += char.upper;
   }
  if (wantsLower) {
    password += char.lower;
   }
  if (wantsNumber) {
    password += char.number;
   }
  if (
     !wantsSpecial &&
     !wantsNumber &&
     !wantsCapital &&
     !wantsLower)
   {
   alert("You must select at least one of the options!  Please try again");
  generatePassword(); 
  }

  for (var index = 0; index < charLength; index++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    actualPassword += password.charAt(randomIndex);
  }

 
   
  return actualPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


