namespace Incerc_Site1.Models
{
    public class Tag
    {
        public int TagId { get; set; }

        public string TagName { get; set; }

        public IList<Food> Foods { get; set; }
    }
}
