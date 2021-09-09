fn main() {
    let r1 = Rect {
        width: 12,
        height: 12,
    };
    println!("area is: {}", r1.area());

    let r2 = Rect::new(13, 13);
    println!("area is: {}", r2.area());
}

struct Rect {
    width: u32,
    height: u32,
}

impl Rect {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    // 注意这里不是构造函数, 也是一个关联函数, 只是名字叫 new 而已
    fn new(width: u32, height: u32) -> Rect {
        Rect { width, height }
    }
}
