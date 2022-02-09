DROP TABLE IF EXISTS TMP_JOIN1;

CREATE TABLE TMP_JOIN1 (
    one INTEGER PRIMARY KEY,
    two VARCHAR(20),
    three VARCHAR(20)
);

INSERT INTO
    TMP_JOIN1
VALUES
    (1, 'A1-1', 'A1-2'),
    (2, 'A2-1', 'A2-2'),
    (3, 'A3-1', 'A3-2'),
    (7, 'A7-1', 'A7-2'),
    (6, 'A6-1', 'A6-2'),
    (5, 'A5-1', 'A5-2'),
    (4, 'A4-1', 'A4-2');

SELECT
    *
FROM
    TMP_JOIN1
LIMIT
    3;

SELECT
    *
FROM
    TMP_JOIN1
LIMIT
    3 OFFSET 1;

SELECT
    *
FROM
    TMP_JOIN1
LIMIT
    3 OFFSET 6;