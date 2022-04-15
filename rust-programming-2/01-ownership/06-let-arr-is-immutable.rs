fn main() {
    {
        let mut arr = [1, 2, 3];
        println!("{:?}", arr);

        arr[0] = 4; // 正常
        println!("{:?}", arr);
    }

    {
        let arr = [1, 2, 3];
        println!("{:?}", arr);

        arr[0] = 4; // 不是可变的, 这里报错
        println!("{:?}", arr);
    }
}
