/* this is a tuple of 3 items, explained next */
type intCoordinates = (int, int, int);
type floatCoordinates = (float, float, float);

let buddy: intCoordinates = (10, 20, 20);

type coordinates('a) = ('a, 'a, 'a);

/* apply the coordinates "type function" and return the type (int, int, int) */
type intCoordinatesAlias = coordinates(int);

let buddy: intCoordinatesAlias = (10, 20, 20);

/* or, more commonly, write it inline */
let buddy: coordinates(float) = (10.5, 20.5, 20.5);
