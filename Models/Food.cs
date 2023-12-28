namespace Incerc_Site1.Models
{
    public class Food
    {
        public int  FoodId { get; set; }

        public int Name { get; set; }

        public double Price { get; set; }

        public Origin Origins { get; set; }

        public string CookTime { get; set; }

        public string imageUrl { get; set; }

        public IList<Tag> Tags { get; set; }
    }
}
