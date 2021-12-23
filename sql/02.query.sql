-- 查询所有行,所有列
SELECT
    *
FROM
    some;

-- 查询所有行,指定列
SELECT
    one
FROM
    some;

-- 查询指定行,所有列
SELECT
    *
FROM
    some
WHERE
    two = 3;

SELECT
    *
FROM
    some
WHERE
    one LIKE 'hey%';