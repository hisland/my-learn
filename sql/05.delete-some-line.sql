DROP TABLE IF EXISTS TMP_TABLE;

CREATE TABLE TMP_TABLE (
    col1 INTEGER PRIMARY KEY,
    col2 VARCHAR(20)
);

INSERT INTO
    TMP_TABLE
VALUES
    (1, '张三'),
    (2, '李四'),
    (3, '王五');

SELECT
    *
FROM
    TMP_TABLE;

-- 删除指定行
DELETE FROM
    TMP_TABLE
WHERE
    col1 = 1;

SELECT
    *
FROM
    TMP_TABLE;