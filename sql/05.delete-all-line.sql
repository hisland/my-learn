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

-- 删除所有行
DELETE FROM
    TMP_TABLE;

SELECT
    *
FROM
    TMP_TABLE; -- 这里没有查询出数据,控制台没反应