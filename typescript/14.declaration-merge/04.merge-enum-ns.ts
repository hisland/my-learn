enum Color {
  red = 1,
  green = 2,
  blue = 4,
}

namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == 'yellow') {
      return Color.red + Color.green
    } else if (colorName == 'white') {
      return Color.red + Color.green + Color.blue
    } else if (colorName == 'magenta') {
      return Color.red + Color.blue
    } else if (colorName == 'cyan') {
      return Color.green + Color.blue
    }
  }
}

console.log(Color.mixColor('yellow'))

export const preventVSCodeError = 1
