using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectApi
{
    public class Assignment
    {

        [Key]
        public int AssignmentId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
         

        public int ProjectMilestoneId{get;set;}
        
         [ForeignKey("ProjectMilestoneId")]
        public   ProjectMilestone projectMilestone{get;set;}

        

    }
}