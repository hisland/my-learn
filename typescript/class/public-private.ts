class Animal{
  name: string; //default is public
  private name2: string; //set to private
  constructor(name: string){
    this.name = name;
    this.name2 = name;
  }
  move(meters: number = 0){
    console.log(this.name, ' moved ' + meters + 'm.');
  }
}
