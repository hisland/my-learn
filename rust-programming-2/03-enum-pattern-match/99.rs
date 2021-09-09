#[derive(Debug)] // 这样可以立刻看到州的名称
enum UsState {
    Alabama,
    Alaska,
    // --snip--
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

fn main() {
    {
        let coin = Coin::Penny;
        let mut count = 0;
        match coin {
            Coin::Quarter(state) => println!("State quarter from {:?}!", state),
            _ => (), // 其它情况啥都不做
        }
    }

    // 下面的 if let 和上面的等价
    {
        let coin = Coin::Penny;
        let mut count = 0;
        if let Coin::Quarter(state) = coin {
            println!("State quarter from {:?}!", state);
        }
        // 这里没有 else 即和上面等价
    }
}
