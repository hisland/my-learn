fn main() {
    let r1 = Rect { width: 12, height: 12};
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
    fn new(width: u32, height: u32) -> Rect {
        Rect {
            width,
            height
        }
    }
}
