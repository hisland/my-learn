DROP TABLE IF EXISTS TMP_TABLE1;

CREATE TABLE TMP_TABLE1 (
    col1 INTEGER PRIMARY KEY,
    col2 VARCHAR(20),
    col3 VARCHAR(20),
    col4 INTEGER
);

INSERT INTO
    TMP_TABLE1
VALUES
    (1, 'AA1', 'BB1', 33),
    (2, 'AA2', 'DD2', 22),
    (3, 'CC3', 'EE3', 10),
    (4, 'CC4', 'FF4', 99);

SELECT
    count(*),
    avg(col4),
    min(col4),
    max(col4),
    col1, -- 这里输出的是最后一行的
    col2,
    col3,
    col4
FROM
    TMP_TABLE1;