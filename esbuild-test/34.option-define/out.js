(() => {
  // aa.jsx
  function some() {
    console.log("some 1 1");
    if (true) {
      console.log("some 2");
    }
    console.log("some 3");
  }
  function hey() {
    console.log("some 1");
    const val = 99;
    console.log(val);
    if (true) {
      console.log("some 2");
    }
    console.log("some 3");
  }
})();
