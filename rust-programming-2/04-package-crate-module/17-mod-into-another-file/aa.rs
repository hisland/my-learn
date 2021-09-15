mod hdl; // 在 mod hdl 后使用分号，而不是代码块，这将告诉 Rust 在另一个与模块同名的文件中加载模块的内容

use hdl::hdl::say2; // 文件名即是一级 mod, 内部不需要再包一层 mod name
use hdl::say;
use hdl::sub::say3; // 嵌套的 mod

fn main() {
    say("god");
    say2("god2");
    say3("god3");
}
