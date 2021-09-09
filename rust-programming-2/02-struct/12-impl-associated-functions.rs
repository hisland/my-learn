fn main() {
    let r1 = Rect::square(10); // 使用关联函数
    let r2 = Rect::square(8);
    let r3 = Rect {
        width: 13,
        height: 8,
    };
    println!("r1 can hold r2? {}", r1.can_hold(&r2));
    println!("r1 can hold r3? {}", r1.can_hold(&r3));
}

struct Rect {
    width: u32,
    height: u32,
}

impl Rect {
    fn can_hold(&self, other: &Rect) -> bool {
        self.width > other.width && self.height > other.height
    }

    // 关联函数, 第一个参数不是 &self
    fn square(size: u32) -> Rect {
        Rect {
            width: size,
            height: size,
        }
    }
}
