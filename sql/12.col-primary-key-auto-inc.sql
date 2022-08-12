DROP TABLE IF EXISTS AUTO_INC;

-- A column declared INTEGER PRIMARY KEY will autoincrement
CREATE TABLE AUTO_INC (COL1 INTEGER PRIMARY KEY);

INSERT INTO
    AUTO_INC
VALUES
    (NULL),
    (NULL),
    (NULL),
    (NULL);

SELECT
    *
FROM
    AUTO_INC;

-- pg 报错
-- sqlite 自增了