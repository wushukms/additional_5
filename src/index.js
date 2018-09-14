module.exports = function check(str, bracketsConfig) {
  let opening_brackets = ["(","[","{","1","3","5"];
  let closing_brackets = [")","]","}","2","4","6"];
  //let the_same = ["7","8","|"];
  let stack = [];
  let i=0;
  while (i<str.length){
    if (opening_brackets.indexOf(str[i]) != -1){
      stack.push(str[i]);
    }
    else{
      if ((closing_brackets.indexOf(str[i]) != -1) && (stack.length != 0)){
          if (opening_brackets.indexOf(stack[stack.length-1]) == closing_brackets.indexOf(str[i])){
              stack.pop();
          }
      }
      else{
        if (str[i] == stack[stack.length-1]){
            stack.pop();
        }
        else{
          stack.push(str[i]);
        }
      }
    }
    i++;
  }
  if (stack.length == 0){
    return true;
  }
  else{
    return false;
  }
}
