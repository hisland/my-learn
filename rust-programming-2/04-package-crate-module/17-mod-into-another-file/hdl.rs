// 标记为 pub 可被其它模块 use 使用
pub fn say(ss: &str) {
    println!("say: {:?}", ss)
}

// 测试不需要同名的 mod 再包装一次
pub mod hdl {
    pub fn say2(ss: &str) {
        println!("say2: {:?}", ss)
    }
}

// 测试嵌套的其它 mod
pub mod sub {
    pub fn say3(ss: &str) {
        println!("say3: {:?}", ss)
    }
}
