using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectApi
{

    public class ProjectMilestone
    {
        [Key]
        public int ProjectMielstoneId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string MilestoneGivenName { get; set; }
        public string Descirption { get; set; }
        public int MilestoneId{get;set;}
        
         [ForeignKey("MilestoneId")]
        public  Milestone milestone{get;set;}


        public int ProjectId {get;set;}
        
         [ForeignKey("ProjectId")]
        public  Project project{get;set;}

        
        public int StatusId { get; set; }
        
         [ForeignKey("StatusId")]
        public  Status status {get;set;}
    }
}