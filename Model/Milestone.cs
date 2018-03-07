

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectApi{

    public class Milestone {

        [Key]
        public int MilestoneId{get;set;}
        public string Name{get;set;}
        public string Description{get;set;}

        public int LevelId{get;set;}
        
         [ForeignKey("LevelId")]
        public  Level level{get;set;}

        
      
    }

}