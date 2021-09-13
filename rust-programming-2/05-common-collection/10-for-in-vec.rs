fn main() {
    {
        let mut vv1: Vec<i32> = Vec::new();
        vv1.push(11);
        vv1.push(22);
        vv1.push(33);

        // 借用传递, 后续正常
        // for ii in &vv1 {
        // 所有权转移, 后续不能再使用 vv1
        for ii in vv1 {
            println!("{:?}", ii);
        }

        println!("{:?}", vv1);
    }
}
