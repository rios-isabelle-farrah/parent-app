DROP TABLE IF EXISTS files CASCADE;
DROP TABLE IF EXISTS meetings;


CREATE TABLE
    files(
        id SERIAL PRIMARY key,
        child_name TEXT not null,
        details TEXT not null
    );


CREATE TABLE
    meetings(
        id SERIAL PRIMARY key,
        date TEXT,
        file_id INT REFERENCES files (id) ON DELETE CASCADE,
        category TEXT not null,	
        details TEXT NOT NULL
    );






-- DROP DATABASE IF EXISTS parent_files_db;

-- CREATE DATABASE parent_files_db;

-- \c parent_files_db;




-- DROP TABLE IF EXISTS files CASCADE;
-- DROP TABLE IF EXISTS meetings;
-- -- DROP TABLE IF EXISTS files CASCADE;

-- CREATE TABLE
--     files(
--         id SERIAL PRIMARY key,
--         child_name TEXT not null,
--         details TEXT not null
--     );


-- CREATE TABLE
--     meetings(
--         id SERIAL PRIMARY key,
--         date TEXT,
--         file_id INT REFERENCES files (id) ON DELETE CASCADE,
--         category TEXT not null,	
--         details TEXT NOT NULL
--     );


-- CREATE TABLE
--     files(
--         id SERIAL PRIMARY key,
--         child_name TEXT not null,
--         uid TEXT not null,
--         details TEXT not null
--     );

--     CREATE TABLE
--     contacts(
--         id SERIAL PRIMARY key,
--         contact_name TEXT NOT NULL,
--         phone TEXT NOT NULL,
--         file_id INT REFERENCES files (id) ON DELETE CASCADE,
--         email TEXT NOT NULL,
--         date TEXT 
--     );


--  CREATE TABLE
--     reimbursements(
--         id SERIAL PRIMARY key,
--         category TEXT NOT NULL,
--         details TEXT NOT NULL,
--         file_id INT REFERENCES files (id) ON DELETE CASCADE,
--         amount_spent INT NOT NULL,
--         date TEXT 
--     );


--      CREATE TABLE
--     gut_health(
--         id SERIAL PRIMARY key,
--         category TEXT NOT NULL,
--         file_id INT REFERENCES files (id) ON DELETE CASCADE,
--         details TEXT NOT NULL,
--         date TEXT 
--     );


