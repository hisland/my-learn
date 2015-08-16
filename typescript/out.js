var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function loggingIdentity1(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// Using Type Parameters in Generic Constraints
// In some cases, it may be useful to declare a type parameter that is constrained by another type parameter. For example,
// XXXXXXXXXXXXXXXXXXXXXError
function find1(n, s) {
    // ...
}
// find (giraffe, myAnimals);
// You can achieve the pattern above by replacing the type parameter with its constraint. Rewriting the example above,
function find(n, s) {
    // ...
}
// find(giraffe, myAnimals);
// Using Class Types in Generics
// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor(构造函数) functions. For example,
function create(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
})();
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
})();
var Animal = (function () {
    function Animal() {
    }
    return Animal;
})();
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        _super.apply(this, arguments);
    }
    return Bee;
})(Animal);
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
})(Animal);
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag; // typechecks!
