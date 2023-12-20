namespace Incerc_Site1.Models
{
    public class ObiectVanzare
    {
        public int  ObiectVanzareId { get; set; }

        public int CategorieId { get; set; }

        public Categorie Categorie { get; set; }

        public string Denumire { get; set; }

        public int Cantitate { get; set; }

        public double Pret { get; set; }
    }
}
