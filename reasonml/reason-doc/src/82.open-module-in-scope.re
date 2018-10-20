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

open School;
let person1: profession = Teacher;
let p: string = getProfession(person1);

/* let p = {
     open School;
     getProfession(person1);
   };
   /* School's content isn't visible here anymore */ */

/* 这个是 sugar */
let p = School.(getProfession(person1));
