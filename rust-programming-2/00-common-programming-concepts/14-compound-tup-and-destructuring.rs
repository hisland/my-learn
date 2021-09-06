fn main() {
    {
        let tup = (500, 3.0, 'a'); // 推导类型
        let (aa, bb, cc) = tup;

        println!("{}", aa);
        println!("{}", bb);
        println!("{}", cc);
    }
    {
        let tup: (i32, f32, char) = (500, 3.0, 'a'); // 指定类型
        let (aa, bb, cc) = tup;

        println!("{}", aa);
        println!("{}", bb);
        println!("{}", cc);
    }
}
