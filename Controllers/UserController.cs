﻿using Incerc_Site1.Contexts;
using Incerc_Site1.Models;
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
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            var httpClient = _httpClientFactory.CreateClient("Postman");
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
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
