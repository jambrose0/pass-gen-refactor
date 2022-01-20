// Assignment Code
var generateBtn = document.querySelector("#generate");

// var createPassword = function(generateBtn)

function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password to be?  Must be between 8 and 128 characters.");
  parseInt(passwordLength);
  console.log(passwordLength);
// //   lowercase
// window.confirm("lowercase letters?");
// var lowerCase = "abcdefghijklmnopqrstuvwxys";
// //uppercase
// window.confirm("Uppercase letters?");
// var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// //numeric
// window.confirm("Would you like numbers?");
// var numbs = '0123456789';
// //special characters

// var specialChar = '!@#$%^&*()'

  
  return passwordText;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//
// window.prompt("would you like to make a password?")
// if(generateBtn) {
//   window.prompt("how many characters would you like it to be?"),
// }
// else if () {
//   window.prompt("How many characters does it need to be?"),
// }


// else {
//   window.alert("lowercase letters?");
// }





// var passInfo = function() {
//   var generateBtn = true;
//   length of password 8-128 characters

//     window.prompt('How long would you like your password to be?');


//   window.alert('lowercase letters?');
//   uppercase
//   window.alert('uppercase letters?');
//  numbers
//   window.alert('numbers?');
//   special characters
//   window.alert('special characters?')
//   return passwordText;
// }

