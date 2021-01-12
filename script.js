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
for (var i = 33; i <= 47; i++) {
  allPasswordCharacters.specialCharArray.push(String.fromCharCode(i));
};


// // generate prompt when "generate password" button is clicked
function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to contain? (Choose a number  between 8 and 128)");
  
  if (isNaN(passwordLength)) {
    alert("Please input a number!");
    return;
  }
  
  else {
  passwordLength = parseInt(passwordLength, 10);
  };
  
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
    selectedPasswordChar.push(...allPasswordCharacters.lowerCharArray);
  };

  if (upperCharInput === true) {
    selectedPasswordChar.push(...allPasswordCharacters.upperCharArray);
  };

  if (numberCharInput === true) {
    selectedPasswordChar.push(...allPasswordCharacters.numberCharArray);
  };

  if (specialCharInput === true) {
    selectedPasswordChar.push(...allPasswordCharacters.specialCharArray);
  };

  // holds the generated password
  var passwordArray = [];

  // loops through the selected characters based on the length of the password selected
  for (var i = 0; i < passwordLength; i++) {

    // randomly select a number based on the length of the array
    var randomChar = Math.floor(Math.random() * selectedPasswordChar.length);

    // takes the randomly selected number, looks up that index in the characters that were selected, takes the item in that index and pushes it into the password variable
    passwordArray.push(selectedPasswordChar[randomChar][0]);
  };
  var finalPassword = passwordArray.join("");
  
  // returns generated password into the write password function to display on page
  return(finalPassword);
};