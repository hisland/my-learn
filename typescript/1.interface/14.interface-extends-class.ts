class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() {
      console.log(1)
    }
}

let b1: SelectableControl = new Button
b1.select()
