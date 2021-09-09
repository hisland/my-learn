fn main() {
    let mut some1 = Empty1 {}; // 空的结构体
    let mut some2 = Empty2(); // 空的元组结构体

    some1 = 2;
    some2 = 3;
}

struct Empty1 {} // 末尾没有 ;号
struct Empty2(); // 末尾必须有 ;号, 否则报错
