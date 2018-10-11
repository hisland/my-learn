class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  // 直接用类当interface
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
