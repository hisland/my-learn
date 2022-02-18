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
    TMP_TABLE1.col1 col11,
    TMP_TABLE1.col2 col12,
    TMP_TABLE2.col1 col21,
    TMP_TABLE2.col2 col22
FROM
    TMP_TABLE1,
    TMP_TABLE2;