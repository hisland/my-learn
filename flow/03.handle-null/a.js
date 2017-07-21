// @flow

function halo(a: string): number{
  if (a === null) {return 0;}
  return a.length;
}

halo('god');
halo(null);

