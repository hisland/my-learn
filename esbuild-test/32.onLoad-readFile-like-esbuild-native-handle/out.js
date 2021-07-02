(() => {
  // bb.js
  function bb_one() {
    console.log("bb one");
  }
  function bb_two() {
    console.log("bb two");
  }
  bb_one();
  bb_two();

  // aa.js
  function aa_one() {
    console.log("aa one");
  }
  aa_one();
})();
