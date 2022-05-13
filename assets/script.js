// list of special characters -!@#$%^&*()_+-
// list of numerical digits
//list of upper case characters
//list of lowercase characters
const number = [1,2,3,4,5,6,7,8,9,0];
const symbols =["!","@","#","$","%","^","&","*","~"];
const letters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generate password(){

  var minimumpasswordlength = 8;
  
  var passwordlength = prompt("enter desired password length");
  
  var numbers = confirm("would you like numbers in your password?");
  
  var lowercase = confirm("would you like lowercase letters in your password?");
  
  var uppercase = confirm("would you like uppercase letters in your password?");
  
  var specialcharachters = confirm ("would you like special charachters in your password?");

  
 

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
