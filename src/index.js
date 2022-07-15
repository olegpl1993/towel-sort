module.exports = function towelSort(matrix) {
  if (matrix == undefined){
    return [];
  }
  let arr = [];
  let flag = 0;
  for (let n = 0; n < matrix.length; n++) {
    if (flag === 0) {
      for (let i = 0; i < matrix[n].length; i++) {
        arr.push(matrix[n][i]);
        flag = 1;
      }
    } else {
      for (let i = matrix[n].length - 1; i >= 0; i--) {
        arr.push(matrix[n][i]);
        flag = 0;
      }
    }
  }
  return arr;
}
