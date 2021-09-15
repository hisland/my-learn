pub mod sub; // 2. 这段放到单独文件, 并 pub mod

pub mod hdl {
    pub fn say2(ss: &str) {
        println!("say2: {:?}", ss)
    }
}

pub fn say(ss: &str) {
    println!("say: {:?}", ss)
}
