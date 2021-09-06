fn main() {
    {
        let xx = 3;
        let yy = xx;
        println!("{} {}", xx, yy);
    }
    {
        let xx = 'a';
        let yy = xx;
        println!("{} {}", xx, yy);
    }
    {
        let xx = true;
        let yy = xx;
        println!("{} {}", xx, yy);
    }
    {
        let xx = 4.4;
        let yy = xx;
        println!("{} {}", xx, yy);
    }
}
