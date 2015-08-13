interface StringArray{
  [index: number]: string;
}

var a: StringArray;
a = ['hello', 'god'];




interface god{
  [index: number]: string; // number索引的值类型必须是下面string索引的子类型
  [index: string]: string;
}


var b: StringArray;
b = ['hello', 'god'];


interface Dictionary {
  [index: string]: string;
  length: number;    // error, the type of 'length' is not a subtype of the indexer
} 
