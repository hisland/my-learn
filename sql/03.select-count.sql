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
    (7, NULL, 'A7-2'),
    (6, 'A6-1', 'A6-2'),
    (5, NULL, 'A5-2'),
    (4, 'A4-1', NULL);

-- count(*) 是总行数
-- count(COL) 是COL的行数, NULL排除
SELECT
    count(*),
    count(one),
    count(two), --NULL排除
    count(three) --NULL排除
FROM
    TMP_JOIN1;