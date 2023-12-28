using System.ComponentModel.DataAnnotations.Schema;

namespace Incerc_Site1.Models
{
    public class Food
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int  FoodId { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public int OriginId { get; set; }

        public virtual Origin Origin { get; set; }

        public string CookTime { get; set; }

//        public string imageUrl { get; set; }
    }
}
