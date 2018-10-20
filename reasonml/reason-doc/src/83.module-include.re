module BaseComponent = {
  let defaultGreeting = "Hello";
  let getAudience = (~excited) => excited ? "world!" : "world";
};

module ActualComponent = {
  /* the content is copied over */
  include BaseComponent;
  /* overrides BaseComponent.defaultGreeting */
  let defaultGreeting = "Hey";
  let render = () => defaultGreeting ++ " " ++ getAudience(~excited=true);
};
