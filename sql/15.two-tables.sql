DROP TABLE IF EXISTS TMP_JOIN1;

CREATE TABLE TMP_JOIN1 (
    one VARCHAR(20),
    two VARCHAR(20),
    three VARCHAR(20)
);

INSERT INTO
    TMP_JOIN1
VALUES
    ('id1', 'A1-1', 'A1-2'),
    ('id2', 'A2-1', 'A2-2'),
    ('id3', 'A3-1', 'A3-2');

DROP TABLE IF EXISTS TMP_JOIN2;

CREATE TABLE TMP_JOIN2 (
    one VARCHAR(20),
    two VARCHAR(20),
    three VARCHAR(20)
);

INSERT INTO
    TMP_JOIN2
VALUES
    ('id1', 'B1-1', 'B1-2'),
    ('id2', 'B2-1', 'B2-2'),
    ('id3', 'B3-1', 'B3-2'),
    ('id4', 'B4-1', 'B4-2');

SELECT
    *
FROM
    TMP_JOIN1;

SELECT
    *
FROM
    TMP_JOIN2;