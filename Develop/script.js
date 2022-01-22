// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxys";
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbs = '0123456789';
var specialChar = '!@#$%^&*()';

var wantsSpecial = true;
var wantsCapital = true;
var wantsLower = true;
var wantsNumber = true;

function generatePassword() {
  var length = prompt("How long would you like your password? Must be between 8 and 128 characters");
  console.log(length);
  if (length >= 8 && length <= 128) {
    window.prompt("Would you like special characters?");
    if (wantsCapital = true) {
     var specialToUse = specialChar[Math.floor(Math.random() * specialChar.length)];
    }
    console.log(specialToUse);
  }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








//set password length
// function passwordLength() {
  
  

  // var passwordText = function() { 
  //   while (passwordLength >= 8 || passwordLength <= 128) {
  //     alert("Does it need lowercase letters?");
  //     }
  // }
// //   lowercase
// window.confirm("lowercase letters?");
// 
// //uppercase
// window.confirm("Uppercase letters?");
// 

// //numeric
// window.confirm("Would you like numbers?");
// 
// //special characters

// 

  
  // return passwordText;
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

