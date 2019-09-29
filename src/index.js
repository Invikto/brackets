module.exports = function check(str, bracketsConfig) {
  let checkSum = 0; // count of open brackets
  let sequence = []; // the array of configuration numbers of open brackets
  let bracketsEquality = false; // the flag of equality of open and closed brackets

  for (let i = 0, n = str.length; i < n; i++) {
    for (let j = 0, m = bracketsConfig.length; j < m; j++) {
      bracketsEquality = (bracketsConfig[j][0] === bracketsConfig[j][1]) ? true : false;
      
      if (str[i] === bracketsConfig[j][0]) {
        if (bracketsEquality && (sequence[sequence.length - 1] === j)) {
          checkSum--;
          sequence.pop();
          break;
        } else {
          checkSum++;
          sequence.push(j);
          break;
        }
      }
      
      if (str[i] === bracketsConfig[j][1]) {
        if (sequence[sequence.length - 1] === j) {
          checkSum--;
          sequence.pop();
          break;
        } else {
          return false;
        }
      }
    }
  }

  return checkSum === 0 ? true : false;
}
