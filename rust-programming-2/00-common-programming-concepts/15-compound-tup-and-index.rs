fn main() {
    {
        let tup = (500, 3.0, 'a'); // 不可修改

        println!("{}", tup.0);
        println!("{}", tup.1);
        println!("{}", tup.2);
    }
    {
        let mut tup = (500, 3.0, 'a'); // 可修改

        println!("{}", tup.0);
        println!("{}", tup.1);
        println!("{}", tup.2);

        tup.0 = 33; // 修改值
        tup.1 = 2.4;
        tup.2 = 'b';

        println!("{}", tup.0);
        println!("{}", tup.1);
        println!("{}", tup.2);
    }
}
