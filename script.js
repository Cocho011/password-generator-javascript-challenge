var generateBtn = document.querySelector("#generate");
// function to generate password based on user input in prompts
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Functions meet specified acceptance criteria and based on user input
function generatePassword() {
  var length = prompt("Enter password length (between 8 and 128 characters):");

// Specific to user input for password length
  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid number between 8 and 128.");
    length = prompt("Please enter password length (between 8 and 128 characters):");
  }
// Specific to acceptance criteria 
  var uppercase = confirm("Should the password include uppercase letters?");
  var lowercase = confirm("Should the password include lowercase letters?");
  var numbers = confirm("Should the password include numbers?");
  var specialChars = confirm("Should the password include special characters?");
// Defines character sets specific to user input on complexity preferences 
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var allChars = "";

  if (uppercase) allChars += uppercaseChars;
  if (lowercase) allChars += lowercaseChars;
  if (numbers) allChars += numberChars;
  if (specialChars) allChars += specialChars;

  if (!uppercase && !lowercase && !numbers && !specialChars) {
    alert("Please select at least one character type.");
    return generatePassword();
  }
// alerts pop up if there is no user input regarding password length and/or special character selection
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}
// tied to writePassword function 
generateBtn.addEventListener("click", writePassword);
