create view vista_estudiantes as
select s.LastName as Nombre, s.FirstMidName as Apellido, c.Title as Materia, c.Credits as Credito from Enrollment as e
inner join Student as s
on e.StudentID = s.ID
inner join Course as c
on e.StudentID = c.CourseID
