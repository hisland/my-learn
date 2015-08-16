function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

var result1 = buildName("Bob"); //error, too few parameters
var result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //ah, just right


function buildName2(firstName: string, lastName ? : string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

var result1 = buildName2("Bob"); //works correctly now
var result2 = buildName2("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName2("Bob", "Adams"); //ah, just right


function buildName3(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

var result1 = buildName3("Bob"); //works correctly now, also
var result2 = buildName3("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName3("Bob", "Adams"); //ah, just right


//参数顺序 require, [optional | default]
// default 是 optional只是有默认值而已
