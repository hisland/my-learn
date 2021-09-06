fn main() {
    {
        let arr = [1, 2, 3]; // 自动推导类型 [{integer}; 3]

        println!("{}", arr[0]);
        println!("{}", arr[1]);
        println!("{}", arr[2]);
    }
    {
        let arr: [i32; 3] = [1, 2, 3]; // 指定类型 [i32; 3]

        println!("{}", arr[0]);
        println!("{}", arr[1]);
        println!("{}", arr[2]);
    }
    {
        let arr = [33; 5]; // 推导类型 [{integer}; 5], 每个item值都是 33

        println!("{}", arr[0]);
        println!("{}", arr[1]);
        println!("{}", arr[2]);
        println!("{}", arr[3]);
        println!("{}", arr[4]);
    }
}
