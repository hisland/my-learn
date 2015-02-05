'use strict';

var a = 3;

switch (a) {
  case 4:
    console.log(4);
  case 3:
    console.log(3);
  case 2:
    console.log(2);
  case 1:
    console.log(1);
    break;
  case 0:
    console.log(0);
}


switch (false) {
  case true:
    console.log(true);
    break;
  case false:
    console.log(false);
    break;
  case 'other':
    console.log('other');
    break;
}
