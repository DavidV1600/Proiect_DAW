using Incerc_Site1.Models;
using Microsoft.EntityFrameworkCore;

namespace Incerc_Site1.Contexts
{
    public class MyAppContext :DbContext
    {
        public DbSet<Tag> Tags { get; set; }

        public DbSet<Food> Foods { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Origin> Origins { get; set; }

        public DbSet<Food_Tag>FoodTags { get; set; }

        public MyAppContext(DbContextOptions<MyAppContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=database_test;");//ConnectionString
        }
    }
}
