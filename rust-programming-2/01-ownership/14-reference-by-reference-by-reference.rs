fn main() {
    let str1 = String::from("god");

    let some1 = &str1;
    let some2 = &some1;
    let some3 = &some2;

    some1 = 3; // some1 type &String
    some2 = 3; // some2 type &&String, 比上一行多了一个 &
    some3 = 3; // some3 type &&&String, 比上一行多了一个 &

    // 看样子, reference 可以多级
}
