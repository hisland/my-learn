DROP TABLE IF EXISTS STUDENT;

DROP TABLE IF EXISTS CLASS;

CREATE TABLE STUDENT (
    id INTEGER PRIMARY KEY,
    class_id INTEGER,
    name VARCHAR(20),
    height VARCHAR(20)
);

CREATE TABLE CLASS (
    id INTEGER PRIMARY KEY,
    name VARCHAR(20)
);

INSERT INTO
    STUDENT
VALUES
    (1, 8, '张三', '180cm'),
    (2, 8, '李四', '190cm'),
    (3, 9, '王五', '170cm'),
    (4, 3, '何七', '120cm');

INSERT INTO
    CLASS
VALUES
    (8, '一年级'),
    (9, '二年级'),
    (10, '三年级');

SELECT
    s.id,
    s.name,
    s.height,
    s.class_id,
    c.name class_name
FROM
    STUDENT s
    INNER JOIN -- 应该所有数据库都支持 内连接
    CLASS c ON s.class_id = c.id;

-- 返回结果是 2 个表都存在的数据