DROP TABLE IF EXISTS TMP_TABLE;

CREATE TABLE TMP_TABLE (one VARCHAR(20), two INTEGER);

-- 一行
INSERT INTO
    TMP_TABLE
VALUES
    ('hey', 2);

-- 多行
INSERT INTO
    TMP_TABLE
VALUES
    ('hey1', 1),
    ('hey2', 2),
    ('hey3', 3);

-- 只插入指定列的值, 其余列为 NULL 或者 是默认值, 或者 递增值
INSERT INTO
    TMP_TABLE (two)
VALUES
    (4),
    (5);

SELECT
    *
FROM
    TMP_TABLE;