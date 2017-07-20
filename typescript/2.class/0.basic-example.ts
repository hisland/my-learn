class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  }
  greet(){
    console.log('hello, ' + this.greeting);
  }
}

var gg = new Greeter('god');
gg.greet();
