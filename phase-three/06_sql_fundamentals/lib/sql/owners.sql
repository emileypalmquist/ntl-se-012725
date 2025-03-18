-- DROP TABLE IF EXISTS owners;
-- Create
-- Read
-- Update
-- Delete
DELETE FROM owners;

CREATE TABLE IF NOT EXISTS owners (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    experience INTEGER
);

INSERT INTO owners (name, age, experience)
VALUES ("Emiley", 30, 5),
("Carisa", 24, 3),
("Kailey", 24, 3),
("Ayva", 18, 2);

UPDATE owners
SET experience = 4
WHERE id = 2;

-- DELETE FROM owners
-- WHERE name = "Emiley";

-- SELECT * FROM owners;
-- SELECT id, name FROM owners;

-- SELECT * FROM owners
-- WHERE age > 20 AND experience > 4;

-- SELECT * FROM owners 
-- WHERE age > 20 OR experience < 3;

SELECT name FROM owners
WHERE id IN (1,3,5);