// 我们鼓励尽可能地使用 --strictNullChecks

// 默认情况下 null 和 undefined 是所有类型的子类型。
// 就是说你可以把 null 和 undefined 赋值给number类型的变量。
// 然而，当你指定了 --strictNullChecks 标记， null 和 undefined 只能赋值给void和它们各自。
// 这能避免很多常见的问题。 也许在某处你想传入一个 string 或 null 或 undefined，
// 你可以使用联合类型 string | null | undefined。 再次说明，稍后我们会介绍联合类型。
