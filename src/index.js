module.exports = function check(str, bracketsConfig) { 
let tempStr; 
while(str){ 
tempStr = str; 
bracketsConfig.forEach(twoBrackets => str = str.replace(twoBrackets.join(""), "")); 
if(tempStr == str) return false; 
} 

if(str == "") return true; 
else return false; 

}
