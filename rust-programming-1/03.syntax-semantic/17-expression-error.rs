fn main() {
    let x = (let y = 6); // 不能这样
    let x = y = 6; // 不能这样
}
