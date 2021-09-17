/**
 * @param  {String} str is the string input, transform to a number array and return;
 */
const stringToNumArray = function (str) {
  // if we call this function, means it is a valid one with no white space.
  // cut off '[' and ']'
  str = str.slice(1, str.length - 1);
  str = str.split(",");
  let result = new Array();
  for (let i = 0; i < str.length; i++) {
    result.push(parseInt(str[i]));
  }
  return result;
};

/**
 * @param  {String} array_str, the string to be checked and return
 * whether it is going to be a valid array or not.
 */
const checkValid = function (array_str) {
  let queue = new Array();
  for (let i = 0; i < array_str.length; i++) {
    let curr = array_str[i];
    if (curr == "[") {
      // we accept no more than 2-d array, so if the length of queue is greater than 2, means there is
      // a structure like [[a,b], [ [a, b]]], which is invalid now.
      if (queue.length >= 2) {
        return false;
      }
      queue.push(curr);
    } else if (curr == "]") {
      if (queue.length == 0) return false;
      else {
        queue.shift();
      }
    }
  }
  return queue.length == 0 ? true : false;
};

export { stringToNumArray, checkValid };
