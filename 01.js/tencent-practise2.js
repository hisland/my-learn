var _ = require("underscore");

//源数组
var source = 
[[184, ],
[147, 110, ],
[159, 120, 156, ],
[183, 171, 140, 114, ],
[137, 137, 177, 191, 168, ],
[197, 194, 157, 167, 168, 138, ],
[126, 145, 115, 178, 144, 110, 120, ],
[125, 102, 192, 139, 167, 171, 147, 190, ],
[142, 154, 146, 184, 134, 149, 127, 142, 164, ],
[198, 160, 142, 102, 117, 168, 130, 168, 162, 179, ],
[107, 183, 134, 109, 129, 154, 130, 196, 102, 190, 178, ],
[191, 157, 187, 133, 199, 151, 188, 169, 116, 148, 171, 193, ],]

var prev = {id:0, val:0}, list = [prev], next;

//双向链接对象数组
for(var i=; i<source.length-1; i++){
	next = {id:0, val:0, prev: prev};
	prev.next = next;
	prev = next;
	list.push(prev);
}
var first = list[0];
var last = list[list.length-1];

var arrs = [];

//读取列表
function read(){
	var items = [];
	arrs.push(items);
	var it = first;
	do {
		items.push(source[it.id][it.val]);
	} while (it = it.next);
})
}
function reset(){
	
}
// console.log(arrs);

//对列表求和
var sums = _.map(arrs, function(v, i){
	return _.reduce(v, function(sum, item){
		return sum + item;
	}, 0)
});

//找到最大值
var max = Math.max.apply(global, sums);
//找到索引
var idx = sums.indexOf(max)
//打印出来
console.log(idx, max, arrs[idx]);
