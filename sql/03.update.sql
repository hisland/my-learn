-- 设置所有列为相同值
UPDATE
    some
SET
    one = 'god';

-- 设置指定条件列
UPDATE
    some
SET
    one = 'halo'
WHERE
    two = 5;