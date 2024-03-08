fn main() {
    let arr = [3; 5];
    // println!("{}", arr); // 这个不行
    println!("{:?}", arr); // 这个可以打印数组内容

    {
        let arr2 = ['a'; 5];
        println!("{:?}", arr2);
    }
    {
        let arr2 = ["abc"; 5];
        println!("{:?}", arr2);
    }
}
