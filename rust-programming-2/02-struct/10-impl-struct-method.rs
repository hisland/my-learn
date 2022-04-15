fn main() {
    let r1 = Rect {
        width: 12,
        height: 12,
    };
    println!("area is: {}", r1.area());
}

struct Rect {
    width: u32,
    height: u32,
}

// 这里实现方法
impl Rect {
    // 实现 area 方法
    // &self 来替代 rect: &Rect
    // 这里是借用 &self
    // 也可以是可变的借用 &mut self
    // 也可以获取所有权 self, 这种非常少, 这种技术通常用在当方法将 self 转换成别的实例的时候，这时我们想要防止调用者在转换之后使用原始的实例
    fn area(&self) -> u32 {
        self.width * self.height
    }
}
