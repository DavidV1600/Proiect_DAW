namespace Incerc_Site1.Models
{
    public class Food_Tag
    {
        public int FoodId { get; set; }
        public Food Food { get; set; }

        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}