// 只能2个参数, 多1个少1个都不行
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

var result1 = buildName("Bob"); //error, too few parameters
var result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //ah, just right


// 1个或者2个参数, 第2个参数可选, 3个太多
function buildName2(firstName: string, lastName ? : string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

var result1 = buildName2("Bob"); //works correctly now
var result2 = buildName2("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName2("Bob", "Adams"); //ah, just right


// 1个或者2个参数, 第2个参数无则使用默认值Smith, 3个太多
function buildName3(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

var result1 = buildName3("Bob"); //works correctly now, also
var result2 = buildName3("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName3("Bob", "Adams"); //ah, just right


//参数顺序 require, [optional | default]
// default 是 optional只是有默认值而已
