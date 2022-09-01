const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
    
  const transposeLetters = transpose(letters);
  const verticalJoin = transposeLetters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }

  return false;
};

const transpose = function(matrix) {
  let newArr = [];
  let acc = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    let column = [];
    for (let i = 0; i < matrix.length; i++) {
      column.push(matrix[i][acc]);
    }
    newArr.push(column);
    acc++;
  }
  return newArr;
};

module.exports = wordSearch;