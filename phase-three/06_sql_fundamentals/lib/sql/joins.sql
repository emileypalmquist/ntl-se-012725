-- select all pets and their owners if the pets age is greater than 10
SELECT * FROM pets
JOIN owners ON pets.owner_id = owners.id
WHERE pets.age > 10;

-- select all appointment info as well as the pet name and procedure name associated with that appointment
-- but only if the appointment date is before a specific date and the pet for that appointment is Bailey

-- (SELECT all of Bailey's past appointments and the procedure name for that appointment)
SELECT appointments.*, pets.name, procedures.name FROM appointments
JOIN pets ON appointments.pet_id = pets.id 
JOIN procedures ON appointments.procedure_id = procedures.id
WHERE appointments.date < "2025-04-11" AND pets.name = "Bailey";