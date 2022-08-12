DROP TABLE IF EXISTS AUTO_INC;

-- A column declared INTEGER PRIMARY KEY will autoincrement
CREATE TABLE AUTO_INC (COL1 INTEGER PRIMARY KEY);

INSERT INTO
    AUTO_INC
VALUES
    (3),
    (7),
    (112),
    -- 可以插入间隔值, 但是递增还是基于最大值
    (80),
    -- (80), -- PRIMARY KEY 不能相同, 直接报错
    (NULL); -- 自增到 113

SELECT
    *
FROM
    AUTO_INC;

-- pg 报错
-- sqlite 自增了