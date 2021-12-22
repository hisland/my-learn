-- 删表
drop table some;

-- 如果存在才 drop, 否则会报错, 通常脚本里用这种方式避免报错
drop table if exists halo;

-- 建表
create table some (one varchar(10), two int);
