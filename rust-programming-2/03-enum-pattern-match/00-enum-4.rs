struct Ipv4 {}
struct Ipv6 {}

enum IpAddr {
    V4(Ipv4), // 参数包含其它值, 包括字符串、数字类型或者结构体,甚至可以包含另一个枚举
    V6(Ipv6),
}

fn main() {
    let homev4 = IpAddr::V4(Ipv4 {});
    let homev4 = IpAddr::V6(Ipv6 {});
}
