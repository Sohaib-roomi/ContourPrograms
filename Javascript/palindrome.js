
 var string = "Sohaib";
var revStr = "";
function checkPalindrome(string){
    
    for(i=string.length-1; i > -1 ; i--){
        revStr += string[i];
 
    }

    if(revStr == string){
        console.log("It is a palindrome");
    
    }    
    else{
        console.log("It is not a palindrome");
    }

};
checkPalindrome(string);
