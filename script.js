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

// holds all possible password characters
var allPasswordCharacters = {
  "lowerCharArray": [],
  "upperCharArray": [],
  "numberCharArray": [],
  "specialCharArray": [],
};

// generates all password characters
for (var i = 97; i <= 122; i++) {
  allPasswordCharacters.lowerCharArray.push(String.fromCharCode(i));
};
for (var i = 65; i <= 90; i++) {
  allPasswordCharacters.upperCharArray.push(String.fromCharCode(i));
};
for (var i = 48; i <= 57; i++) {
  allPasswordCharacters.numberCharArray.push(String.fromCharCode(i));
};
for (var i = 32; i <= 47; i++) {
  allPasswordCharacters.specialCharArray.push(String.fromCharCode(i));
};

console.log(allPasswordCharacters)

// // generate prompt when "generate password" button is clicked
function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to contain? (Choose a number  between 8 and 128)");
  passwordLength = parseInt(passwordLength, 10);

  // if an input other than a number between 8-128 is entered, alert user and ask prompt again
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8-128 characters!");
    passwordLength = prompt("How many characters would you like your password to contain? (Choose a number  between 8 and 128)");
    passwordLength = parseInt(passwordLength, 10);
  };

  // when the password length is chosen, then ask what kind of criteria is needed
  alert("You will be shown four criteria that may be applied to the password. Please select at least one.");
  // ask if lowercase should be included
  var lowerCharInput = confirm("1. Would you like lowercase characters to be included?");
  // ask if uppercase should be included
  var upperCharInput = confirm("2. Would you like uppercase characters to be included?");
  // ask if numbers should be included
  var numberCharInput = confirm("3. Would you like number characters to be included?");
  // ask if special characters should be included
  var specialCharInput = confirm("4. Would you like special characters to be included?");

  //confirm that at least one of the criteria above is selected; if not, go through the prompts again
  while (lowerCharInput === false && upperCharInput === false && numberCharInput === false && specialCharInput === false) {
    alert("Please choose at least one criteria to be applied to the password.")
    lowerCharInput = confirm("1. Would you like lowercase characters to be included?");
    upperCharInput = confirm("2. Would you like uppercase characters to be included?");
    numberCharInput = confirm("3. Would you like number characters to be included?");
    specialCharInput = confirm("4. Would you like special characters to be included?");
  };

  // once at least one criteria is selected, start to generate password
  // array that will hold the selected characters for generating the password
  var selectedPasswordChar = [];

  // pulls the selected criteria characters and adds them to the array
  if (lowerCharInput === true) {
    selectedPasswordChar.push(allPasswordCharacters.lowerCharArray);
  };

  if (upperCharInput === true) {
    selectedPasswordChar.push(allPasswordCharacters.upperCharArray);
  };

  if (numberCharInput === true) {
    selectedPasswordChar.push(allPasswordCharacters.numberCharArray);
  };

  if (specialCharInput === true) {
    selectedPasswordChar.push(allPasswordCharacters.specialCharArray);
  };

};

// combines the characters from each character array
// randomly select a number based on the length of the array
// push each selected choice into the password array until the length is acheived
//once password is generated, display password