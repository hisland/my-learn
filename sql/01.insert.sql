-- 一行
INSERT INTO
    some
VALUES
    ('hey', 2);

-- 多行
INSERT INTO
    some
VALUES
    ('hey1', 1),
    ('hey2', 2),
    ('hey3', 3);

-- 只插入指定列的值, 其余列为 NULL 或者 是默认值, 或者 递增值
INSERT INTO
    some (two)
VALUES
    (4),
    (5);