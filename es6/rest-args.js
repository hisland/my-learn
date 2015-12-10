function containsAll(longStr, ...strs){
  console.log(longStr, strs);
  for(var word of strs){
    if (longStr.indexOf(word) === -1) {
      return false;
    }
  }
  return true;
}


console.log(containsAll('god', 'o', 'd'));
console.log(containsAll('please', 'p', 'ea'));
console.log(containsAll('test', 'p', 'ea'));
