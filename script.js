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

// // generate prompt when "generate password" button is clicked
function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to contain? (Choose a number  between 8 and 128)");
  passwordLength = parseInt(passwordLength, 10);

  // if an input other than a number between 8-128 is entered, alert user and ask prompt again
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8-128 characters!");
    var passwordLength = prompt("How many characters would you like your password to contain? (Choose a number  between 8 and 128)");
    passwordLength = parseInt(passwordLength, 10);
  };
  console.log(passwordLength)
};

// when the password length is chosen, then ask what kind of criteria is needed
// ask if lowercase should be included
// ask if uppercase should be included
// ask if numbers should be included
// ask if special characters should be included
//confirm that at least one of the criteria above is selected; if not, go through the prompts again
// once at least one criteria is selected, generate password
//once password is generated, display password