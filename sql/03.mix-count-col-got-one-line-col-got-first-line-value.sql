DROP TABLE IF EXISTS TMP_TABLE1;

CREATE TABLE TMP_TABLE1 (
    one INTEGER PRIMARY KEY,
    two VARCHAR(20),
    three VARCHAR(20)
);

INSERT INTO
    TMP_TABLE1
VALUES
    (1, 'AA1', 'BB1'),
    (2, 'AA2', 'DD2'),
    (3, 'CC3', 'EE3'),
    (4, 'CC4', 'FF4');

SELECT
    count(*),
    two, -- 这里输出第一行, 不懂
    three
FROM
    TMP_TABLE1;

SELECT
    two,
    three
FROM
    TMP_TABLE1