-- 删表
DROP TABLE TMP_TABLE;

-- 如果存在才 drop, 否则会报错, 通常脚本里用这种方式避免报错
DROP TABLE IF EXISTS TMP_TABLE;

-- 建表
CREATE TABLE TMP_TABLE (one VARCHAR(20), two INTEGER, three INT);