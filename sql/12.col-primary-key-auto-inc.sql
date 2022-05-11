DROP TABLE IF EXISTS AUTO_INC;

-- A column declared INTEGER PRIMARY KEY will autoincrement
CREATE TABLE AUTO_INC (COL1 INTEGER PRIMARY KEY);

INSERT INTO
    AUTO_INC
VALUES
    -- 虽然是 NULL, 但是它其实是自增了
    (NULL),
    (NULL),
    (NULL),
    (NULL);

SELECT
    *
FROM
    AUTO_INC;