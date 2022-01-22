// Assignment Code
var generateBtn = document.querySelector("#generate");

var pass = {
  lower: "abcdefghijklmnopqrstuvwxys",
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  special: '!@#$%^&*()'
};

function generatePassword() {
  var passLength = prompt("How long would you like your password? Must be between 8 and 128 characters");
  console.log(passLength);

  var wantsSpecial = window.prompt("Would you like special characters?");
  var wantsCapital = window.confirm("Would you like Uppercase letters?");
  var wantsLower = window.confirm("Would you like lowercase letters?");
  var wantsNumber = window.confirm("Would you like numbers?");

  if (passLength >= 8 && passLength <= 128) {
    // window.confirm("Would you like special characters?");
    if (wantsSpecial = true) {
     var specialToUse = pass.special[Math.floor(Math.random() * pass.special.length)];
    }
    console.log(specialToUse);
  } if (wantsCapital = true) {
    var capitalToUse = pass.upper[Math.floor(Math.random() * pass.upper.length)];
    console.log(capitalToUse);
  } if (wantsLower = true) {
    var lowerToUse = pass.lower[Math.floor(Math.random()* pass.lower.length)];
    console.log(lowerToUse);
  } if (wantsNumber = true) {
    var numberToUse = pass.numbers[Math.floor(Math.random()*pass.numbers.length)];
    console.log(numberToUse);
  }
  else {
    window.alert("Password must be between 8 and 128 characters.  Please try again");
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

