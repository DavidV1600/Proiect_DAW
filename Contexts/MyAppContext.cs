using Incerc_Site1.Models;
using Microsoft.EntityFrameworkCore;

namespace Incerc_Site1.Contexts
{
    public interface IUserService
    {
        AuthenticateResponse? Authenticate(AuthenticateRequest model);
        IEnumerable<User> GetAll();
        User? GetById(int id);
    }

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

        //private List<User> _users = new List<User>
        //{
        //    new User { UserId = 1, Username = "test", Email = "test", Password = "test" }
        //};

        private readonly IJwtUtils _jwtUtils;

        public MyAppContext(IJwtUtils jwtUtils)
        {
            _jwtUtils = jwtUtils;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Food_Tag>()
                .HasKey(ft => new { ft.FoodId, ft.TagId });
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=database_test;");//ConnectionString
        }

        public AuthenticateResponse? Authenticate(AuthenticateRequest model)
        {
            var user = Users.SingleOrDefault(x => x.Username == model.Username && x.Password == model.Password);

            // return null if user not found
            if (user == null) return null;

            var token = user.Email+user.Password;

            return new AuthenticateResponse(user, token);
        }

        public IEnumerable<User> GetAll()
        {
            return Users;
        }

        public User? GetById(int id)
        {
            return Users.FirstOrDefault(x => x.UserId == id);
        }
    }
}
