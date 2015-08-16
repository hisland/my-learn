class Grid{
  static origin = {
    x:0, y:0
  }
  calculateDistenceFromOrigin(point: {x: number, y:number}){
    var xDist = (point.x - Grid.origin.x);
    var yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number){}
}

var grid1 = new Grid(1);
var grid2 = new Grid(5);

console.log(grid1.calculateDistenceFromOrigin({x:10, y:10}));
console.log(grid2.calculateDistenceFromOrigin({x:10, y:10}));


