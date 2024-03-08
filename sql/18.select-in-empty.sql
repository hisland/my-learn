DROP TABLE IF EXISTS TMP_TABLE1;

CREATE TABLE TMP_TABLE1 (
    col1 INTEGER PRIMARY KEY,
    col2 VARCHAR(20)
);

INSERT INTO
    TMP_TABLE1
VALUES
    (1, '张三'),
    (2, '李四'),
    (3, '王五'),
    (5, '赵七');

SELECT
    t1.col1 id,
    t1.col2 name
FROM
    TMP_TABLE1 t1
WHERE
    col1 IN ()