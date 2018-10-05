fn main() {
    let decimal = 98_222;
    let hex = 0xff_ff;
    let octal = 0o77_77;
    let binary = 0b1111_0000;
    let byte = b'A';

    println!("Decimal: {}", decimal);
    println!("Hex: {}", hex);
    println!("Octal: {}", octal);
    println!("Binary: {}", binary);
    println!("Byte (u8 only): {}", byte);
}
