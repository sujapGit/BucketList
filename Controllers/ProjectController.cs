using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectApi;

namespace ProjectApi
{
    [Route("api/[Controller]")]
    public class ProjectController : Controller
    {
        private readonly ProjectContext context;
        private readonly IProjectService _ip;


        public ProjectController(ProjectContext context, IProjectService ip)
        {
            _ip = ip;
            this.context = context;
        }
        

        [HttpGet]

        [Route("GetProjects")]
        public  async Task<IEnumerable<Project>>  GetAllProjectList()
        {
            return await _ip.GetAllProjectList();
        }

        [HttpPut]
        [Route("GetProjectById/{projectId}")]
        public async Task<Project> GetProjectById(int projectId)
        {
            return await _ip.GetProjectById(projectId);
        }

        [HttpPost]
        [Route("AddProject")]

        public async Task<bool> AddProject([FromBody] Project project)
        {
            return await _ip.AddProject(project);
        }
        [HttpPost]
        [Route("UpdateProject")]
        public async Task<bool> UpdateProject([FromBody] Project project) {
            return await _ip.UpdateProject(project);
         }

        [HttpPost]
        [Route("DeleteProject")]

        public async Task<string>  DeleteProject(string projectId) {
           
            return await _ip.DeleteProject(4);
         }

    }




}