using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjectApi
{

    public interface IProjectService
    {
        Task<IEnumerable<Project>> GetAllProjectList();
        Task<bool> AddProject(Project project);

        Task<Project> GetProjectById(int projectId);
         Task<bool> UpdateProject(Project project);
        Task<string> DeleteProject(int projectId);






    }

}