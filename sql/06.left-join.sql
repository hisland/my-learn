DROP TABLE IF EXISTS TMP_JOIN_LEFT;

DROP TABLE IF EXISTS TMP_JOIN_RIGHT;

CREATE TABLE TMP_JOIN_LEFT (
    id VARCHAR(20),
    col1 VARCHAR(20),
    col2 VARCHAR(20)
);

CREATE TABLE TMP_JOIN_RIGHT (
    id VARCHAR(20),
    col3 VARCHAR(20),
    col4 VARCHAR(20)
);

INSERT INTO
    TMP_JOIN_LEFT
VALUES
    ('id1', 'A1-1', 'A1-2'),
    ('id2', 'A2-1', 'A2-2'),
    ('id3', 'A3-1', 'A3-2');

INSERT INTO
    TMP_JOIN_RIGHT
VALUES
    ('id1', 'B1-1', 'B1-2'),
    ('id2', 'B2-1', 'B2-2'),
    ('id3', 'B3-1', 'B3-2'),
    ('id4', 'B4-1', 'B4-2');

SELECT
    *
FROM
    TMP_JOIN_LEFT;