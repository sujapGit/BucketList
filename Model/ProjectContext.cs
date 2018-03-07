

using Microsoft.EntityFrameworkCore;

namespace ProjectApi{

public class ProjectContext :DbContext
{
      public ProjectContext(DbContextOptions<ProjectContext> options)
            :base(options)
        {

        }

    public DbSet<Project> Project {get;set;}
    public DbSet<Assignment> Assignment {get;set;}
    public DbSet<Level> Level {get;set;}
    public DbSet<Status> Status {get;set;}
    public DbSet<Milestone> Milestone{get;set;}
    public DbSet<ProjectMilestone> ProjectMilestone{get;set;}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-4P110F9\;Database=GetProjectGoal;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

}


}