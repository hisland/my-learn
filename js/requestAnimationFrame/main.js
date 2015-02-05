
//当遇到需要给相同元素赋值多次class又要产生动画， 这样不行
document.getElementById('cc').className = 'cc1';
document.getElementById('cc').className = 'cc2';


//当遇到需要给相同元素赋值多次class又要产生动画， 这样可以
document.getElementById('dd').className = 'cc1';
window.requestAnimationFrame(function() {
  document.getElementById('dd').className = 'cc2';
});
