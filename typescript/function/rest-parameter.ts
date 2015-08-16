function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

var buildNameFun: (fname: string, ...rest: string[]) => string = buildName;


// rest 参数 也相当于 optional, 如果没有它也是数组,只是空数组
