module MyModule = {
  module NestedModule = {
    let message = "hello";
  };
};

let message = MyModule.NestedModule.message;
