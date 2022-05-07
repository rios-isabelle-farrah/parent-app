# accelerator-back-end






heroku version

DROP TABLE IF EXISTS files CASCADE;

CREATE TABLE
    files(
        id SERIAL PRIMARY key,
        child_name TEXT not null,
        additional_info TEXT not null
    );

----------
INSERT INTO
    files(child_name, additional_info)
VALUES 
    ('Madden','additional information'),
    ('Ryan','additional information'),
    ('Jason','additional information');

------


DATABASE_URL="postgres://jdlllniykxuftv:94131b67e11f64f47632fa8360be66f87dc3086126620dbef0fc674bd7e63da8@ec2-3-224-164-189.compute-1.amazonaws.com:5432/d6p27cg1cvt9t4"
PORT=3333
PG_HOST="ec2-3-224-164-189.compute-1.amazonaws.com"
PG_PORT=5"5432"
PG_DATABASE="d6p27cg1cvt9t4"
PG_USER="jdlllniykxuftv"
PG_PASSWORD="94131b67e11f64f47632fa8360be66f87dc3086126620dbef0fc674bd7e63da8"


--------------