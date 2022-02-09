DROP TABLE IF EXISTS TMP_TABLE;

CREATE TABLE TMP_TABLE (one VARCHAR(20), two INTEGER);

INSERT INTO
    TMP_TABLE
VALUES
    ('hey1', 1),
    ('hey2', 2),
    ('hey3', 3);

-- 查询所有行,所有列
SELECT
    *
FROM
    TMP_TABLE;

-- 查询所有行,指定列
SELECT
    one
FROM
    TMP_TABLE;

-- 查询指定行,所有列
SELECT
    *
FROM
    TMP_TABLE
WHERE
    two = 3;

SELECT
    *
FROM
    TMP_TABLE
WHERE
    one LIKE 'hey%';