-- 删表
DROP TABLE some;

-- 如果存在才 drop, 否则会报错, 通常脚本里用这种方式避免报错
DROP TABLE IF EXISTS halo;

-- 建表
CREATE TABLE some (one VARCHAR(20), two INTEGER, three INT);

