DELETE FROM appointments;
DELETE FROM procedures;
DELETE FROM pets;
DELETE FROM owners;

INSERT INTO owners (name, age, experience)
VALUES ("Emiley", 30, 5),
("Carisa", 24, 3),
("Kailey", 24, 3),
("Ayva", 18, 2);

INSERT INTO pets (name, breed, age, owner_id)
VALUES ('Apollo', 'Golden Retriever', 3, 1),
('Daisy', 'Golden Retriever', 3, 1),
('Bailey', 'Yorkie', 13, 2),
('Dayna', 'Golden Doodle', 4, 3),
('Max', 'Golden Doodle', 3, 4);

INSERT INTO procedures (name)
VALUES ('Allergy Relief'),
('Teeth Cleaning'),
('Check up');

INSERT INTO appointments (date, doctor_name, pet_id, procedure_id)
VALUES ("2025-01-10", "DR. doolittle", 3, 1),
("2025-01-21", "DR. doolittle", 3, 2),
("2025-03-10", "DR. doolittle", 2, 3),
("2025-04-11", "DR. doolittle", 1, 3),
("2025-05-15", "DR. doolittle", 4, 3);