// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

error('hey')


// 没有显示返回, 默认返回的是 undefined, 也不行
function bad(message: string): never {
    let aa = 99;
    console.log(aa + 3)
}

bad('bbq')

// 返回never的函数必须存在无法达到的终点
// 无限循环
function infiniteLoop(): never {
    while (true) {
    }
}
