!function(o) {
    function r(n) {
        if (e[n]) return e[n].exports;
        var t = e[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return o[n].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports;
    }
    var e = {};
    return r.m = o, r.c = e, r.p = "", r(0);
}([ function(o, r, e) {
    if (r.v = 3.14, console.log(2), !1) console.log(444);
    console.log("production");
} ]);