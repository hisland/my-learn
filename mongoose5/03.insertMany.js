const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect(
  "mongodb://localhost/mongoose5",
  { useNewUrlParser: true }
);

const schema1 = mongoose.Schema({}, { strict: false }); // 不强制doc结构
const Dog = mongoose.model("dog", schema1, "dog"); // 第3个参数指定 collection 名字, 不会自动生成第一个参数的复数

Dog.insertMany(
  [
    {
      halo: 1,
      bbq: 2
    },
    {
      halo: 3,
      bbq: 4
    }
  ],
  function(err, rs) {
    console.log(2, err, rs);
  }
);
