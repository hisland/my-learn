enum IpAddr {
    V4(u8, u8, u8, u8),
    V6 { some: String }, // 匿名结构体
}

fn main() {
    let homev4 = IpAddr::V4(127, 0, 0, 1);
    // 使用方式
    let homev4 = IpAddr::V6 {
        some: String::from("hello"),
    };
}
