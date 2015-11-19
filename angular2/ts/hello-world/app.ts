import {Component, bootstrap} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App {{name}}</h1>'
})
class AppComponent { 
  constructor() {
    this.name = 'hisland';
  }
}
bootstrap(AppComponent);
