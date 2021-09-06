fn main() {
    {
        let mut xx = String::from("hello"); // 可变变量
        println!("{:?}", xx);
        let some1 = &xx; // 不可变引用
        println!("{:?}", some1); // 这里使用了不可变引用
        let some2 = &mut xx; // 这里获取了可变引用, 这样可以, 因为当前作用域后面没有再使用 some1
    }
    {
        let mut xx = String::from("hello"); // 注意必须是可变变量
        println!("{:?}", xx);
        let some1 = &xx; // 不可变引用
        let some2 = &mut xx; // 这里获取了可变引用, 但是下面一行还在使用 some1, 这里报错
        println!("{:?}", some1); // 这里使用了不可变引用 some1
    }

    // 其实最终规则如下
    // https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#the-rules-of-references
    // 同一时间, 只能有多个不可变引用, 或者只能有一个可变引用
    // 引用必须总是有效, 不能产生垂悬引用
}
