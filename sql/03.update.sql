DROP TABLE IF EXISTS TMP_TABLE;

CREATE TABLE TMP_TABLE (one VARCHAR(20), two INTEGER);

INSERT INTO
    TMP_TABLE
VALUES
    ('hey1', 1),
    ('hey2', 2),
    ('hey5', 5),
    ('hey3', 3);

-- 设置所有列为相同值
UPDATE
    TMP_TABLE
SET
    one = 'god';

-- 设置指定条件列
UPDATE
    TMP_TABLE
SET
    one = 'halo'
WHERE
    two = 5;

SELECT
    *
FROM
    TMP_TABLE;