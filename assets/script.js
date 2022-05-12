// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generate password(){
  // list of special characters -!@#$%^&*()_+-
  // list of numerical digits
  //list of upper case characters
  //list of lowercase characters

  //how many characters?
    //is ir 8 or more?
  // use special characters
  //use numbers?
  //use capital letters?
  //use lower case letters?



  //put together the password
  //combine the lists that were chosen
  //pick a random character from the combined list and place it it the password up the chosen length
  return "mypassword"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
