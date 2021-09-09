enum IpAddrKind {
    V4, // enum 成员, 不带参数, 相当于 类单元结构体
    V6,
}

struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

fn main() {
    let homev4 = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };
    let homev6 = IpAddr {
        kind: IpAddrKind::V6,
        address: String::from("::1"),
    };
}
