mod ring1 {
    // 默认是 private 的, 需要显式指定 pub, 下面的代码才可用
    mod ring2 {
        // 默认是 private 的, 需要显式指定 pub, 下面的代码才可用
        fn test() {
            println!("{:?}", "test");
        }
    }
}

fn main() {
    crate::ring1::ring2::test(); // 绝对路径

    ring1::ring2::test(); // 相对路径
    self::ring1::ring2::test(); // 相对路径
}
