using System.ComponentModel.DataAnnotations;

namespace ProjectApi{
    public class Level{
        [Key]
        public int LevelId{get;set;}
        public string value{get;set;}
    }
}