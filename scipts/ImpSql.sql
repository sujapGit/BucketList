
 --   Insert into Milestone (Name,Description,LevelId) Values 
	--('Milestone 1' , 'This is Milestone one',1),('Milestone 2' , 'This is Milestone two',2),
	--('Milestone 3' , 'This is Milestone three',3),('Milestone 4' , 'This is Milestone four',4),('Milestone 5' , 'This is Milestone five',5)
	--;

	--Insert into Project(Name,Description,StartDate,EndDate,StatusId,CreatedDate)
	--values ('Getting a Job',' associated to get a professional Job.',GETDATE(),GETDATE(),2,GETDATE())
	
	
	--Insert into ProjectMilestone(ProjectId,MilestoneId,StartDate,EndDate,MilestoneGivenName,Descirption,StatusId)
	--values(1,1,GETDATE(),GETDATE(),'Present','Give Interview',2)

	--Insert into Assignment(ProjectMilestoneId,StartDate,EndDate,Title,Description)
	--values (4,GETDATE(),GETDATE(),'Brainstrom ' , 'Think think think')
	
	--select * from ProjectMilestone
	--select * from project
	--select * from Milestone
	--select * from Assignment

	--Select p.ProjectName,p.ProjectDescription,pm.MilestoneId,a.AssignmentId,a.AssignmentTitle,a.AssignmentDescription from 
	--Project as p inner join ProjectMilestone as pm on p.ProjectId = pm.ProjectId
	--inner join Assignment as a on pm.ProjectMilestoneId = a.ProjectMilestoneId 
	--where p.ProjectId=10

	--Insert into Level 
	--values(1),(2),(3),(4),(5)

	

--INSERT INTO [dbo].[Status]
--           (
--           [StatusName])
--     VALUES
--           ('Complete')

--		   INSERT INTO [dbo].[Status]
--           (
--           [StatusName])
--     VALUES
--           ('Intial')

--		   INSERT INTO [dbo].[Status]
--           (
--           [StatusName])
--     VALUES
--           ('Uncomplete')

--		   INSERT INTO [dbo].[Status]
--           (
--           [StatusName])
--     VALUES
--           ('Draft')
