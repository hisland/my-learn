fn main() {
    let decimal = 98_222;
    println!("Decimal: {:?}", decimal);

    let hex = 0xff;
    println!("Hex: {:?}", hex);

    let octal = 0o77;
    println!("Octal: {:?}", octal);

    let binary = 0b1111_0000;
    println!("Binary: {:?}", binary);

    let byte = b'A';
    println!("Byte (u8 only): {:?}", byte);
}
