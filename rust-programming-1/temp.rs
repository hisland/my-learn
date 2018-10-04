enum Cell {
    Dead = 0,
    Alive = 1,
}


fn main() {
    // let cells: Vec<u32> = (0..10)
    //     .map(|i| {
    //         match i {
    //             3 => 0,
    //             5 => 0,
    //             10 => 0,
    //             _ => 1
    //         }
    //     })
    //     .collect();
    // print!("{:?}", cells.iter().fold(String::new(), |acc, &num| acc + &num.to_string() + ","));

  // let some_u8_value = 3;
  // match some_u8_value {
  //     1 => println!("one"),
  //     3 => println!("three"),
  //     5 => println!("five"),
  //     7 => println!("seven"),
  //     _ => println!("nothing"),
  // }

  // for aa in (0..10) {
  //   if aa == 1 {
  //     println!("one")
  //   } else if aa == 3 {
  //     println!("three")
  //   } else {
  //     println!("nothing")
  //   }
  // }
  // let ll = (0..10).map(|bb| {
  //   match bb {
  //     1 => Cell::Alive,
  //     _ => Cell::Dead,
  //   }
  // });
  // for aa in ll {
  //   println!("{}",aa)
  // }

        let width = 3;
        let height = 3;

        let cells = (0..width * height)
            .map(|i| {
                // if i % 2 == 0 {
                //     Cell::Alive
                // } else {
                //     Cell::Dead
                // }
                match i {
                    2 => 99,
                    _ => i,
                }
            });

  for aa in cells {
    println!("{}",aa)
  }
}


use std::fmt;
impl fmt::Display for Cell {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {

      let aa = match self {
        Cell::Alive => 1,
        Cell::Dead => 0,
      };
      write!(f, "{}", aa)?;
      Ok(())
    }
}
