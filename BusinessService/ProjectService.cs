using System.Collections.Generic;
using System.Linq;

namespace ProjectApi
{

    public class ProjectService : IProjectService
    {

        private readonly ProjectContext _db;

        public ProjectService(ProjectContext db)
        {
            _db = db;
        }

        public IEnumerable<Project> GetAllProjectList()
        {
           return _db.Project.Select(p =>p);

        }
    }
}