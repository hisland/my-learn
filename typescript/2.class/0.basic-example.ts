class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  }
  greet(){
    console.log('hello, ' + this.greeting);
  }
}

var g = new Greeter('god');
g.greet();
