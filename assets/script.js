// lines 2-7 are universal variables to be used as source data for user generated passwords
var characterlength = 8;
var choicearray= [];
var specialcharacterarray = ["!","@","#","$","%","^","&","*","~","<",">","?","/",];
var lowercasearray = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercasearray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numberarray = ["1","2","3","4","5","6","7","8","9","0",];


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var rightprompts = getprompts();
  var passwordText = document.querySelector("#password");
// return "newpassword"
  if (rightprompts){
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  }else{
      passwordText.value = "";
  };

};
// function on line 29-34 fetches data inputed from user into prompts to generate the password
function generatePassword() {
  var password = "";
  for(var i = 0; i< characterlength; i++){
      var randomcharacter = Math.floor(Math.random() * choicearray.length);
      password = password + choicearray[randomcharacter];
  };
  return password;

};

// code below is for a function that displays prompts for the user to confirm their password customization
function getprompts(){
  choicearray = [];

  characterlength = prompt("Enter desired password length(8 - 128 characters)"); 
// Code on line 51-53 is a rule for the user password to be between 8-128 characters long with an alert if user submits a password length outside of the allowed range.
if (isNaN(characterlength) || characterlength < 8 || characterlength > 128){
  alert("Character length needs to contain 8-128 characters");
  return false;
};
// confirm prompt asking user to confirm given option
  if (confirm("would you like lowercase letters in your password?")){
  choicearray = choicearray.concat(lowercasearray);

};

if (confirm("would you like uppercase letters in your password?")){
        
  choicearray = choicearray.concat(uppercasearray);
};

if (confirm("would you like numbers in your password?")){
  choicearray = choicearray.concat(numberarray);
};

if (confirm ("would you like special characters in your password?")){
  choicearray = choicearray.concat(specialcharacterarray);
};

return true;
};
 

 



