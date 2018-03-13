using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectApi
{


    public class Project
    {

        [Key]
        public int ProjectId { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }
        
        [Column(TypeName="date")]
        public DateTime StartDate { get; set; }

        [Column(TypeName="date")]
        public DateTime EndDate { get; set; }

        public DateTime CreatedDate { get; set; }

        public int StatusId { get; set; }
        
         [ForeignKey("StatusId")]
        public  Status status {get;set;}



    }

}
