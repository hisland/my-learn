# viewport 结论

* 最终结果是设置 width=device-width, minimum-scale=1, maximum-scale=1 在各浏览器上一致

* 将viewport拆分成下面2种来考虑容易理解
	* visual viewport(相当于屏幕的尺寸,固定大小,可从scree.width/height获得)
	* layout viewport(css布局时html容器的大小)

* meta指定的是 layout viewport,  默认宽度为 980px

* width在0到device-width(即visual viewport的宽度)之间, 强制为device-width, 不能再缩小
* 浏览器绝对会让可见内容区域(可以超过layout viewport大小)缩放
  到visual viewport相同大小,可以看完整个缩略图, 
  minimum/maximum-scale和user-scalable=no 的设置在这个范围内不起作用
* 设置 width=device-width 会自动设置 initial-scale=1, 反之亦然
* 
* 
* 
* 
* 


