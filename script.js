var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var passwordCharSet = "";
var length;
var password = "";
var lcase;
var ucase;
var numb;
var spesh;
var charac = document.querySelector(".passText");



function addSpecial() {
    spesh = prompt("Do you want special characters in your password? (Y/N)");
spesh = spesh.toLowerCase();
if (spesh == "y")
{
    passwordCharSet += special;
}
else if (spesh == "n")
{
    passwordCharSet = passwordCharSet;
}
else{
    
    console.log("Please make valid entry");
    alert("Please make valid entry");
    addSpecial();
}
};

function addLowerCase() {
lcase = prompt("Do you want lower case characters in your password? (Y/N)");
lcase = lcase.toLowerCase();
if (lcase == "y")
{
    passwordCharSet += lowercase;
}
else if (lcase == "n")
{
    passwordCharSet = passwordCharSet;
}
else{
    
    console.log("Please make valid entry");
    alert("Please make valid entry");
    addLowerCase();
}

};
function addUpperCase() {
ucase = prompt("Do you want upper case characters in your password? (Y/N)");
ucase = ucase.toLowerCase();
if (ucase == "y")
{
    passwordCharSet += uppercase;
}
else if (ucase == "n")
{
    passwordCharSet = passwordCharSet;
}
else{
    
    console.log("Please make valid entry");
    alert("Please make valid entry");
    addUpperCase();
}
};
function addNumbers() {
numb = prompt("Do you want numbers in your password? (Y/N)");
numb = numb.toLowerCase();
if (numb == "y")
{
    passwordCharSet += numbers;
}
else if (numb == "n")
{
    passwordCharSet = passwordCharSet;
}
else{
    
    console.log("Please make valid entry");
    alert("Please make valid entry");
    addNumbers();
}
};
function getLength () {
length = prompt("Please enter preferred password length (must be between 8 and 128 characters)");
if (length < 8 || length > 128 || isNaN(length))
{
    
    console.log("Please make valid entry");
    alert("Please make valid entry");
    getLength();
}


};


function generatePassword(){

password = "";
passwordCharSet = "";
getLength();
addLowerCase();
addUpperCase();
addNumbers();
addSpecial();

if(lcase == 'n' && ucase == 'n' && spesh == 'n' && numb =='n')
{
alert("No character type selected");
return;
}

else{

for (i = 0; i < length; i++) 
{
password += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
console.log(password);
}
charac.textContent = " Your password is: " + password;

}

}

function copyFunction() {


/* Get the text field */
var copyTextArray = charac.textContent.split(" ");
var copyText = document.createElement('textarea');
copyText.value = copyTextArray[copyTextArray.length - 1];
copyText.setAttribute('readonly','');
copyText.style = {position: 'absolute', left: '-9999px'};
document.body.appendChild(copyText);
// Select text inside element
copyText.select();
// Copy text to clipboard
document.execCommand('copy');
// Remove temporary element
document.body.removeChild(copyText); 

alert("Copied the generated password: " + copyText.value);

}

