fn main() {
    {
        let xx = String::from("hello");
        let len = got_len(&xx);
        println!("{:?} {:?}", xx, len);
    }
}

fn got_len(str: &String) -> usize {
    str.len()
}
