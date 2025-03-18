CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY,
    date TEXT,
    doctor_name TEXT,
    pet_id INTEGER,
    procedure_id INTEGER
);

INSERT INTO appointments (date, doctor_name, pet_id, procedure_id)
VALUES ("2025-01-10", "DR. doolittle", 3, 1),
("2025-01-21", "DR. doolittle", 3, 2),
("2025-03-10", "DR. doolittle", 2, 3),
("2025-04-11", "DR. doolittle", 1, 3),
("2025-05-15", "DR. doolittle", 4, 3);