using System;
using System.Collections.Generic;
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
        public IEnumerable<Project> GetAllProjectList()
        {
            return _ip.GetAllProjectList();
        }



    }




}