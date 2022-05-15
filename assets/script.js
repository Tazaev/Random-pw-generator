//list of special characters -!@#$%^&*()_+-
//list of numerical digits
//list of upper case characters
//list of lowercase characters
var characterlength = 8;
var choicearray= [];
var specialcharacterarray = ["!","@","#","$","%","^","&","*","~","<",">","?","/",];
var lowercasearray = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercasearray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numberarray = ["1","2","3","4","5","6","7","8","9","0",];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var rightprompts = getprompts();
  var passwordText = document.querySelector("#password");

  if (rightprompts){
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  }else{
      passwordText.value = "";
  }

};

function generatePassword() {
  var password = "";
  for(var i = 0; i< characterlength; i++){
      var randomcharacter = Math.floor(Math.random() * choicearray.length);
      password = password + choicearray[randomcharacter];
  }
  return password;

};


//how many characters?
//is ir 8 or more?
// use special characters
//use numbers?
//use capital letters?
//use lower case letters?

 // var minimumpasswordlength = 8;

 // var maximumpasswordlength = 128;
  
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
    return String.symbols[math.floor(math.random() * symbols.length)]
  }
};

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }



  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }
 
  var randompasswordgenerated = "";

  for (let i=0; i < (parseInt(passwordlength) - minimumcount); i++){
    var randomnumberpicked = math.floor(math.random() * 4);
  }
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  //pick a random character from the combined list and place it it the password up the chosen length

 
  return "mypassword"
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

