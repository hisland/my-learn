fn main() {
    let decimal = 98_222; // 10进制
    println!("Decimal: {}", decimal);

    let hex = 0xff_ff; // 16进制
    println!("Hex: {}", hex);

    let octal = 0o77_77; // 8进制
    println!("Octal: {}", octal);

    let binary = 0b1111_0000; // 2进制
    println!("Binary: {}", binary);

    let byte = b'A'; // Byte (u8 only)
    println!("Byte (u8 only): {}", byte);
}
