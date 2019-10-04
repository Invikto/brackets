module.exports = function check(str, bracketsConfig) {
  let checkSum = 0; // count of open brackets
  const openBrackets = []; // an array of configuration numbers of open brackets

  for (let i = 0, n = str.length; i < n; i++) {
    for (let j = 0, m = bracketsConfig.length; j < m; j++) {
      // is the configuration of the last open bracket equal the current configuration
      const condition = openBrackets[openBrackets.length - 1] === j;
      // a flag of equality of open and closed brackets
      const areEqual = (bracketsConfig[j][0] === bracketsConfig[j][1]);

      // is the current bracket an open bracket
      if (str[i] === bracketsConfig[j][0]) {
        if (areEqual && condition) {
          checkSum--;
          openBrackets.pop();
          break;
        } else {
          checkSum++;
          openBrackets.push(j);
          break;
        }
      }

      // is the current bracket a closed bracket
      if (str[i] === bracketsConfig[j][1]) {
        if (condition) {
          checkSum--;
          openBrackets.pop();
          break;
        } else {
          return false;
        }
      }
    }
  }

  return checkSum === 0;
}
