using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ProjectApi
{

    public class ProjectService : IProjectService
    {

        private readonly ProjectContext _db;

        public ProjectService(ProjectContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Project>> GetAllProjectList()
        {
            return await _db.Project.ToListAsync();

        }

        public async Task<Project> GetProjectById(int id)
        {
            return await _db.Project.SingleOrDefaultAsync(p => p.ProjectId==id);
        }

        public async Task<bool> AddProject(Project project)
        {
            try
            {

                await _db.Project.AddAsync(project);
               await _db.SaveChangesAsync();
                return  true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> UpdateProject(Project project)
        {
            try
            {
                var newProject = await _db.Project.SingleAsync(p => p.ProjectId == project.ProjectId);
                newProject.Name = project.Name;
                newProject.Description = project.Description;
                newProject.CreatedDate = project.CreatedDate;
                newProject.status = project.status;
                newProject.StartDate = project.StartDate;
                newProject.EndDate = project.EndDate;
                _db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<string>  DeleteProject(int projectId)
        {

            var selectedProject = await _db.Project.AsNoTracking().SingleOrDefaultAsync(p => p.ProjectId == projectId);
             Console.WriteLine("api"+projectId);
            if (selectedProject == null)
            {
                return "Not found =>"+projectId;
            }
            else
            {
                try
                {

                    _db.Project.Remove(selectedProject);
                    _db.SaveChanges();
                    return "Deleted"+projectId;
                }
                catch
                {
                    return "Deleted"+projectId;
                }
            }

        }
    }
}