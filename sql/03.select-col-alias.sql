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
    (1, 'AA', 'BB', 33),
    (2, 'AA', 'DD', 22),
    (3, 'CC', 'EE', 10),
    (4, 'CC', 'FF', 99);

SELECT
    col3,
    col3 som1, -- 不使用 as
    col3 AS some2 -- 使用 as
FROM
    TMP_TABLE1;