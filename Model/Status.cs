using System.ComponentModel.DataAnnotations;

namespace ProjectApi
{
    public class Status
    {
        [Key]
        public int StatusId { get; set; }
        public string StatusName { get; set; }

    }
}