enum IpAddrKind {
    V4(String), // 带参数的成员
    V6(String),
}

struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

fn main() {
    let homev4 = IpAddrKind::V4(String::from("127.0.0.1"));
    let homev4 = IpAddrKind::V6(String::from("::1"));
}
