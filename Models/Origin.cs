namespace Incerc_Site1.Models
{
    public class Origin
    {
        public int OriginId { get; set; }

        public string OriginName { get; set;}

        public IList<Food> Foods { get; set; }
    }
}
