using Incerc_Site1.Models;
using Microsoft.EntityFrameworkCore;

namespace Incerc_Site1.Contexts
{
    public class MyAppContext :DbContext
    {
        public DbSet<Categorie> Categories { get; set; }

        public DbSet<ObiectVanzare> ObiecteVanzare { get; set; }

        public DbSet<User> Users { get; set; }

        public MyAppContext(DbContextOptions<MyAppContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=database_test;");//ConnectionString
        }
    }
}
