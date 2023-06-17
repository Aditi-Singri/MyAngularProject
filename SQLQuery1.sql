create database makeDoctorAppointmentDB;

create table tblPatientDetails(
	[name] nvarchar(50),
	email nvarchar(50),
	phoneNumber char(10),
	[date] date,
	timeslot nvarchar(20)

);

CREATE TABLE tblSignUP
(
	[name] nvarchar(50) not null,
	email nvarchar(50) primary key,
	phoneNumber nvarchar(20) not null,
	[password] nvarchar(20) not null
);

select * from tblPatientDetails;

select * from tblSignUP;

delete from tblPatientDetails where email like 'aditisingri31@gmail.com';

insert into tblPatientDetails
VALUES('girish' , 'girish@gmail.com' , '08152913611' ,'1-11-2022', '5-6pm');

alter table tblPatientDetails ALTER COLUMN date nvarchar(20); 

insert into tblPatientDetails
VALUES('Chinmayi Baligar' , 'chinmayi@gmail.com' , '07795052535' ,'2022-11-17', '12-1pm'),
('Vedant Maheshwari' , 'vedant@gmail.com' , '08152913611' ,'2022-11-17', '6-7pm');

insert into tblSignUP
VALUES('Chinmayi Baligar' , 'chinmayi@gmail.com' , '7795052535' ,'chinmayi@123'),
('Aditi Singri' , 'aditisingri31@gmail.com' , '8152913611' ,'aditi@123');

insert into tblSignUP
VALUES('Chinmayi Baligar' , 'chinmayiii22i@gmail.com',null,'chinmayi@123');

DELETE FROM tblSignUP
WHERE email LIKE 'chinmayiiii@gmail.com' ;

select * from tblPatientDetails where [date] like '2022-11-17';

select count(*) as logincheck
from tblSignUP
where email like 'aditisingri31@gmail.com' and [password] like 'aditi@123'

Alter PROCEDURE spcheckIfRegisteredUser 
@emailId nvarchar(50) ,
@password nvarchar(20) 
AS  
begin
select count(*) as logincheck
from tblSignUP
where email like @emailId and [password] like @password
end  

Execute spcheckIfRegisteredUser 'aditisingri31@gmail.com','aditi@123';

CREATE PROCEDURE spDeleteOldAppointments 
@date date 
AS  
begin
delete  
from tblPatientDetails
where [date] like @date
end

Execute spDeleteOldAppointments '2022-12-12'

CREATE PROCEDURE spViewAppointmentsOnDate 
@date date 
AS  
begin
select *  
from tblPatientDetails
where [date] like @date
end

Execute spViewAppointmentsOnDate '2022-11-17'