
>>> Core modules are always preferentially loaded if their identifier is passed to require(). For instance, require('http') will always return the built in HTTP module, even if there is a file by that name.

官方文档指出, core module始终优先加载, 即使有个同名的模块放在那里
