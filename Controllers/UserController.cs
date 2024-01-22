using Incerc_Site1.Contexts;
using Incerc_Site1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;

namespace Incerc_Site1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyAppContext _context;
        private readonly IHttpClientFactory _httpClientFactory;

        public UserController(MyAppContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }

        // POST: api/User
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _context.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }


        [AllowAnonymous]
[HttpPost("register")]
public async Task<ActionResult<User>> Register(UserRegistrationRequest model)
{
    // Check if the username already exists
    if (_context.Users.Any(u => u.Username == model.Username))
    {
        return BadRequest(new { message = "Username already exists" });
    }

    // Create a new user (consider hashing the password)
    var user = new User
    {
        Username = model.Username,
        Email = model.Email,
        Password = model.Password // Ideally, you should hash the password
    };

    // Add the new user to the DbContext
    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    // Optionally, you can return the created user (excluding sensitive information like password)
    return CreatedAtAction(nameof(GetUserById), new { id = user.UserId }, user);
}


        // GET: api/Food
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Food/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();
            return user;
        }

        // PUT: api/Food/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User user)
        {
            if (id != user.UserId) return BadRequest();
            _context.Entry(user).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // DELETE: api/Food/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool UserExists(int id) => _context.Users.Any(e => e.UserId == id);
    }
}
