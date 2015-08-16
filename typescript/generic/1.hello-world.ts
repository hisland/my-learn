function identity1(arg: number): number {
    return arg;
}

function identity2(arg: any): any {
    return arg;
}

function identity<T>(arg: T): T {
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
