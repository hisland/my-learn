// 我们鼓励尽可能地使用--strictNullChecks

// 默认情况下null和undefined是所有类型的子类型。
// 就是说你可以把null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
// 这能避免很多常见的问题。 也许在某处你想传入一个string或null或undefined，
// 你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
