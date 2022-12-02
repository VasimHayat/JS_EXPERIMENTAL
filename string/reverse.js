
// Reverse the String 

function reverseByInbuildMethod(inputStr){
    let chartArray = inputStr.split('');
    return chartArray.reverse().join(''); // default reverse method
}

function reverseWithCustom(inputStr){
    let inputSize = inputStr.length-1;
    let returnStr="";
    for(let i = inputSize;i>=0;i--){
        returnStr+=inputStr[i];
         
    }
    return returnStr;
}

function reverseWithSubStr(inputStr){
    let inputSize = inputStr.length-1;
    let returnStr="";
    for(let i = 0;i<=inputSize;i++){ 
        returnStr=inputStr.substr(i,1)+returnStr;
    }
    return returnStr;
}

// Palindrome Check
function iSPalindrome (inputStr){
    let inputSize = inputStr.length-1;    
    for(let i = 0;i<=inputSize;i++){ 
         if(inputStr[i] !=  inputStr[inputSize-i]){
           return false;
         }
    }     
    return true;
}

function iSPalindrome1 (inputStr){ 
    let reverseStr = inputStr.split('').reverse().join(''); 
    return reverseStr == inputStr;
}

// Capitalize the alternative char
function capitalizeAlt (inputStr){ 
    let reverseStr = inputStr.split(''); 
     for(let i=0;i<reverseStr.length;i++){
         if(i%2 == 0){
            reverseStr[i] = reverseStr[i].toUpperCase();
         }
     }
     return reverseStr.join('');
}
 

 