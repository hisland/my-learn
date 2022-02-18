DROP TABLE IF EXISTS TMP_TABLE1;

CREATE TABLE TMP_TABLE1 (
    one INTEGER PRIMARY KEY,
    two VARCHAR(20),
    three VARCHAR(20)
);

-- NULL 在这里相当于占位符
INSERT INTO
    TMP_TABLE1
VALUES
    (NULL, 'A1-1', 'A1-2'),
    (NULL, 'A2-1', 'A2-2'),
    (NULL, 'A3-1', 'A3-2');

SELECT
    *
FROM
    TMP_TABLE1;