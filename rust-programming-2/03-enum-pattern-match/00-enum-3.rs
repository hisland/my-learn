enum IpAddrKind {
    V4(u8, u8, u8, u8), // 带 多个 参数的成员
    V6(String),
}

struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

fn main() {
    let homev4 = IpAddrKind::V4(127, 0, 0, 1);
    let homev4 = IpAddrKind::V6(String::from("::1"));
}
