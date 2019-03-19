enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}

let status = Status.Ready

status = 2 // OK

status = Color.Green // Error

export const preventVSCodeError = 1
