(() => {
  // fake:./bb.js
  var hello = 100;
  var mike = 2;
  var bb_default = { hello, mike };

  // aa.js
  function aa_one() {
    console.log("aa one");
  }
  aa_one();
  console.log(bb_default);
})();
