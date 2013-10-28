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

var prev = [], next;

//获得读取索引列表
source.forEach(function(v, i){
	if (i === 0) {
		prev = [[0]];
	} else {
		next = [];
		prev.forEach(function(k, j){
			var c = _.clone(k);
			var last = k[k.length-1];
			c.push(last);
			next.push(c);
			c = _.clone(k);
			c.push(last+1);
			next.push(c);
		})
		prev = next;
	}
})

//读取列表
var arrs = [];
prev.forEach(function(v, i){
	var items = [];
	arrs.push(items);
	v.forEach(function(k, j){
		items.push(source[j][k]);
	})
})
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
