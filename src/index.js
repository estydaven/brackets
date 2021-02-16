module.exports = function check(str, bracketsConfig) {
  let string = str;
  let count = 0;

  for (var i = 0; i < string.length; i++){
    if(str[i] == '[' || str[i] == '(' || str[i] == '{' || str[i] == '|') {
        count++;
    }
    if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '|'){
        count -= 1;
    }
    if (count < 0){
        break;
    }
  }
    if (count != 0){
        return false;
    } else {
        return true;
    }
}