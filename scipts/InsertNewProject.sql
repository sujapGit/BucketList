USE [Capstone]
GO

INSERT INTO [dbo].[Project]
           ([ProjectName]
           ,[ProjectDescription]
           ,[StartDate]
           ,[EndDate]
           ,[Tags]
           ,[StatusId])
     VALUES
           (
		   'Project1','This is first Project',GETDATE(),GETDATE(),'project',1
           );

		   select * from Project
GO



