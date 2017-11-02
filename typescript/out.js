var aa1;
(function (aa1) {
    var bb = 3;
    console.log(bb);
    var aa2;
    (function (aa2) {
        var bb = 3;
        console.log(bb);
    })(aa2 = aa1.aa2 || (aa1.aa2 = {}));
})(aa1 || (aa1 = {}));
