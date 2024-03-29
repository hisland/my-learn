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
    LEFT JOIN -- 应该基本支持, 有些也叫 LEFT OUTER JOIN 左连接 左外连接
    CLASS c ON s.class_id = c.id;

-- 返回结果是, 左侧全有