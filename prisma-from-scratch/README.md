## 使用说明

1. 修改 `prisma/schema.prisma`, 然后执行 `npx prisma migrate dev` 升级数据库
2. 修改 `main.ts`, 运行 `npx ts-node main.ts` 查看脚本输出

## 总结

- 感觉 1 个 @ 是控制 field 的, 2 个 @@ 是控制 table 的, 也不见得, 看文档 https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attributes
- type 后面跟 [] 表示是数组, 跟 ? 表示可选, 看文档 https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-type-modifiers
