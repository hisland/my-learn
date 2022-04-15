mod hdl;

use hdl::say;
use hdl::hdl::say2;
use hdl::sub::say3; // 1. 这里 use 不变, 但是真实存放的结构变化了

fn main() {
    say("god");
    say2("god2");
    say3("god3");
}
