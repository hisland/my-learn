DROP TABLE IF EXISTS TMP_TABLE1;

CREATE TABLE TMP_TABLE1 (
    one INTEGER PRIMARY KEY,
    two VARCHAR(20),
    three VARCHAR(20)
);

INSERT INTO
    TMP_TABLE1
VALUES
    (1, 'AA', 'BB'),
    (2, 'AA', 'DD'),
    (3, 'CC', 'EE'),
    (4, 'CC', 'FF');

SELECT
    count(*),
    two,
    three
FROM
    TMP_TABLE1;

SELECT
    two,
    three
FROM
    TMP_TABLE1