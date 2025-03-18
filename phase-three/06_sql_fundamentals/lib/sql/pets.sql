CREATE TABLE IF NOT EXISTS pets (
    id INTEGER PRIMARY KEY,
    name TEXT,
    breed TEXT,
    age INTEGER,
    owner_id INTEGER
);

INSERT INTO pets (name, breed, age, owner_id)
VALUES ('Apollo', 'Golden Retriever', 3, 1),
('Daisy', 'Golden Retriever', 3, 1),
('Bailey', 'Yorkie', 13, 2),
('Dayna', 'Golden Doodle', 4, 3),
('Max', 'Golden Doodle', 3, 4);