var bbq = halo2(1, 2);
console.log(bbq);
function halo2(aa, bb) {
    return halo1(aa, bb);
}
function halo1(aa, bb) {
    return aa + bb;
}
