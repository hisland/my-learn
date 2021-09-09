fn main() {
    let r1 = Rect {
        width: 12,
        height: 12,
    };
    let r2 = Rect {
        width: 8,
        height: 8,
    };
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
    // 这个方法有多个参数
    fn can_hold(&self, other: &Rect) -> bool {
        self.width > other.width && self.height > other.height
    }
}
