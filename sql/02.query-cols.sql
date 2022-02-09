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
    (3, 'A3-1', 'A3-2');

-- 所谓的投影查询
SELECT
    three,
    two,
    two,
    one
FROM
    TMP_JOIN1;