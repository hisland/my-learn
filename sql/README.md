## 总结

- 表格数据是二维表
- 源数据和目标数据都是二维表
- WHERE 条件可以将结果表的行缩减, 不指定 WHERE 即是查询所有行
- SELECT xx,xx
    - 可以将结果列缩减
    - 可以将结果列重复
    - 可以将结果列重排列
- SELECT * 根据表格定义自动展开所有列
- SELECT count(*) 计数所有行
- SELECT count(xx) 计数 xx 列不为 NULL 值的行数