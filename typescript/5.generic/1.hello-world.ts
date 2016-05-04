function identity1(arg: number): number { // 只适用number
    return arg;
}

function identity2(arg: any): any { // 适用任意值, 只是输入输出可以不同
    return arg;
}

function identity<T>(arg: T): T { // 适用任意值, 输入输出 相同, 范型
    return arg;
}

var output1 = identity<string>("myString");  // type of output will be 'string'
console.log(output1);

var output2 = identity("myString");  // type of output will be 'string'
console.log(output2);


function loggingIdentity1<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
