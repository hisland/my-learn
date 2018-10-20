module School = {
  type profession =
    | Teacher
    | Director;

  let person1 = Teacher;
  let getProfession = person =>
    switch (person) {
    | Teacher => "A teacher"
    | Director => "A director"
    };
};

let anotherPerson: School.profession = School.Teacher;
print_endline(School.getProfession(anotherPerson)); /* "A teacher" */
