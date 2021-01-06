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

// generate prompt when "generate password" button is clicked
document.getElementById("generate").onclick = function startGenerating() {
  var passwordLength = prompt("How many characters would you like your password to contain? (Choose between 8-128 characters)");

  // if an input other than a number between 8-128 is entered, then alert the user and ask prompt again

// when the password length is chosen, then ask what kind of criteria is needed
// ask if lowercase should be included
// ask if uppercase should be included
// ask if numbers should be included
// ask if special characters should be included
//confirm that at least one of the criteria above is selected; if not, go through the prompts again
// once at least one criteria is selected, generate password
//once password is generated, display password