fn main() {
    let mut some1 = Empty1 {}; // 空的结构体
    let mut some2 = Empty2 (); // 空的元组结构体
    let mut some3 = Empty3; // 类单元结构体

    some1 = 1;
    some2 = 2;
    some3 = 3;
}

struct Empty1 {} // 末尾没有 ;号
struct Empty2 (); // 末尾必须有 ;号, 否则报错
struct Empty3; // 类单元结构体
