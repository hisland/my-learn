DROP TABLE IF EXISTS INSERT_NOT_NULL;

CREATE TABLE INSERT_NOT_NULL (COL1 VARCHAR(30) NOT NULL);

INSERT INTO
    INSERT_NOT_NULL
VALUES
    (NULL);