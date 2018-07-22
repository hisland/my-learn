fn main() {
    let s = String::from("hello");

    let slice1 = &s[0..2];
    let slice2 = &s[..2];

    let len = s.len();

    let slice3 = &s[3..len];
    let slice4 = &s[3..];

    let slice5 = &s[0..len];
    let slice6 = &s[..];

    println!("{:?}", slice1);
    println!("{:?}", slice2);
    println!("{:?}", slice3);
    println!("{:?}", slice4);
    println!("{:?}", slice5);
    println!("{:?}", slice6);
}
