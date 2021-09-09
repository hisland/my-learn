fn main() {
    let str1 = "yes";

    let str2 = &str1[..]; // 获取 &str 的 slice, 结果类型还是  &str

    str1 = 3;
    str2 = 3; // slice 的 slice 还是 slice, 即 &str[..] 的类型还是 &str
}
