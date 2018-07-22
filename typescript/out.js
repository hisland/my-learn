// 常数枚举只能使用常数枚举表达式并且不同于常规的枚举的是它们在编译阶段会被删除。
// 常数枚举成员在使用的地方被内联进来。 这是因为常数枚举不可能有计算成员
console.log(0 /* Up */);
console.log(1 /* Down */);
console.log(2 /* Left */);
console.log(3 /* Right */);
console.log(Directions); // 并没有这玩意儿
