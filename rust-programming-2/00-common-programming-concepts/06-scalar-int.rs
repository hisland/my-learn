fn main() {
    let i8: i8 = 3;
    let i16: i16 = 3;
    let i32: i32 = 3;
    let i64: i64 = 3;
    let isize: isize = 3;

    let u8: u8 = 3;
    let u16: u16 = 3;
    let u32: u32 = 3;
    let u64: u64 = 3;
    let usize: usize = 3;

    println!("8-bit: {}", i8);
    println!("16-bit: {}", i16);
    println!("32-bit: {}", i32);
    println!("64-bit: {}", i64);
    println!("arch: {}", isize);

    println!("8-bit: {}", u8);
    println!("16-bit: {}", u16);
    println!("32-bit: {}", u32);
    println!("64-bit: {}", u64);
    println!("arch: {}", usize);
}
