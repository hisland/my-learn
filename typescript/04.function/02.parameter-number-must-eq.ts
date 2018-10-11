function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let result1 = buildName('Bob') // error, too few parameters
let result2 = buildName('Bob', 'Adams', 'Sr.') // error, too many parameters
let result3 = buildName('Bob', 'Adams') // ah, just right
