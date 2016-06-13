// a = `<div a bb=cc d="ee" f='gg' x="<abc/>" "aa"=make test="ad'd" kk='ad"ds'>test string</div>`;
// b = /<[^>]*?(\s+[^>]*?(=('[^']*?'|"[^"]*?"|[^>]+?))?)*>/;

// console.log(a.match(b));


a = `<div aaa="<div>" bbb='t<a">t' cc de="f</div>f" qq>hello</div>`;
b = /<.+?("[^"]*"|'[^']*'|[^>]*)*.+?>/;

console.log(a.match(b));


