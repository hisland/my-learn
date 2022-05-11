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
    (3, '王五');

DROP TABLE IF EXISTS TMP_TABLE2;

CREATE TABLE TMP_TABLE2 (
    col1 INTEGER PRIMARY KEY,
    col2 VARCHAR(20)
);

INSERT INTO
    TMP_TABLE2
VALUES
    (1, '180cm'),
    (2, '190cm'),
    (3, '170cm');

SELECT
    TMP_TABLE1.col1, -- 没有指定别名, 就用原来的名字
    TMP_TABLE1.col2,
    TMP_TABLE2.col1, -- 这里不同 table 有相同列, 名字一样了
    TMP_TABLE2.col2
FROM
    TMP_TABLE1,
    TMP_TABLE2;