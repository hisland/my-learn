fn main() {
    let i8: i8 = 3;
    println!("8-bit: {}", i8);

    let i16: i16 = 3;
    println!("16-bit: {}", i16);

    let i32: i32 = 3;
    println!("32-bit: {}", i32);

    let i64: i64 = 3;
    println!("64-bit: {}", i64);

    let i128: i128 = 3;
    println!("128-bit: {}", i128);

    // the isize and usize types depend on the kind of computer your program is running on:
    // 64 bits if you’re on a 64-bit architecture and
    // 32 bits if you’re on a 32-bit architecture
    let isize: isize = 3;
    println!("arch: {}", isize);

    let u8: u8 = 3;
    println!("8-bit: {}", u8);

    let u16: u16 = 3;
    println!("16-bit: {}", u16);

    let u32: u32 = 3;
    println!("32-bit: {}", u32);

    let u64: u64 = 3;
    println!("64-bit: {}", u64);

    let u128: u128 = 3;
    println!("128-bit: {}", u128);

    let usize: usize = 3;
    println!("arch: {}", usize);
}
