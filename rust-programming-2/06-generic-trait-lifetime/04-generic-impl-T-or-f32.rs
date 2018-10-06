struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };

    println!("p.x = {}", p.x());

    // // 这个识别为 Pint<i32> , 没有实现方法错误
    // let p2 = Point { x: 5, y: 10 };
    // println!("p2.x = {}", p2.distance_from_origin());

    let p3 = Point { x: 5.0, y: 10.0 };
    println!("p3.x = {}", p3.distance_from_origin());
}
