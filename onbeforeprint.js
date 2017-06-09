(function() {

  var beforePrint = function() {
    console.log('Functionality to run before printing.');
  };

  var afterPrint = function() {
    console.log('Functionality to run after printing');
  };

  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    });
  }

  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;

}());
