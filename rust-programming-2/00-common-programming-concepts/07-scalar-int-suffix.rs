fn main() {
    {
        let aa: u8 = 3;
        aa = 'a';
        println!("{:?}", aa);
        let bb = 3u8; // 与 aa 的定义一样, 只是类型作为了字面量的后缀了
        bb = 'a';
        println!("{:?}", bb);
    }
    {
        let aa: u32 = 3;
        aa = 'a';
        println!("{:?}", aa);
        let bb = 3u32; // 与 aa 的定义一样, 只是类型作为了字面量的后缀了
        bb = 'a';
        println!("{:?}", bb);
    }
    {
        let aa: u128 = 3;
        aa = 'a';
        println!("{:?}", aa);
        let bb = 3u128; // 与 aa 的定义一样, 只是类型作为了字面量的后缀了
        bb = 'a';
        println!("{:?}", bb);
    }
}
