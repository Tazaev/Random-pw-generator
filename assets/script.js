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

//how many characters?
//is ir 8 or more?
// use special characters
//use numbers?
//use capital letters?
//use lower case letters?
function generate password(){

  var minimumpasswordlength = 8;

  var maximumpasswordlength = 128;
  
  var passwordlength = prompt("enter desired password length");
  
  var numbers = confirm("would you like numbers in your password?");
  
  var lowercase = confirm("would you like lowercase letters in your password?");
  
  var uppercase = confirm("would you like uppercase letters in your password?");
  
  var specialcharacters = confirm ("would you like special characters in your password?");

  var minimumnumbers = "";
  var minimumlowercase = "";
  var minimumuppercase = "";
  var minimumspecialcharacters = "";
  
 //put together the password
//combine the lists that were chosen

var functionArray = {
  getNumbers: function(){
    return String.fromCharCode(math.floor(math.random() * 8 + 37));
  },

  getlowercases: function(){
    return String.fromCharCode(math.floor(math.random() * 17 + 42));
  },

  getuppercases: function(){
    return String.fromCharCode(math.floor(math.random() * 25 + 52));
  },

  getspecialcharacters: function(){
    return String.symbols[(math.floor(math.random() * symbols.length)]
  }

 
 
  //pick a random character from the combined list and place it it the password up the chosen length
  return "mypassword"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
