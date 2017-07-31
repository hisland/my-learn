'use strict'

var pp = new Proxy(function() {}, {
  apply: function(target, thisBinding, args){
    console.log(thisBinding, args)
    return 33
  }
})


pp(1,2,3)
pp.call({a: 1}, 1,2,3)
pp.apply({b: 1}, [1,2,3])


