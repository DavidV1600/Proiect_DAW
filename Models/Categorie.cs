namespace Incerc_Site1.Models
{
    public class Categorie
    {
        public int CategorieId { get; set; }

        public string Nume { get; set; }

        public IList<ObiectVanzare> Obiecte { get; set; }
    }
}
