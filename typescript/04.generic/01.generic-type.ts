function identity1<T>(arg: T): T {
    return arg;
}

var myIdentity: <T>(arg: T)=>T = identity1;


// T 是任意指定的, 可以是这样, 用U代替

function identity2<T>(arg: T): T {
    return arg;
}

var myIdentity: <U>(arg: U)=>U = identity2;


// 可以用 call-signature

function identity3<T>(arg: T): T {
    return arg;
}

var myIdentity: {<T>(arg: T): T} = identity3;

// 用 call-signature 就可以把它变成 interface

interface GenericIdentityFn1 {
    <T>(arg: T): T;
}

function identity4<T>(arg: T): T {
    return arg;
}

var myIdentity: GenericIdentityFn1 = identity4; // 这个是根据调用动态指定T

// generic parameter 可以上提

interface GenericIdentityFn2<T> {
    (arg: T): T;
}

function identity5<T>(arg: T): T {
    return arg;
}

var myIdentity: GenericIdentityFn2<number> = identity5; // 这个已经强制 myIdentity 只接受number



