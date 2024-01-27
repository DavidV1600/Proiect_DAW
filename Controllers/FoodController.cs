using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Incerc_Site1.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Incerc_Site1.Contexts;

namespace Incerc_Site1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly MyAppContext _context;

        public FoodController(MyAppContext context)
        {
            _context = context;
        }

        // POST: api/Food
        [HttpPost]
        public async Task<ActionResult<Food>> CreateFood(Food food)
        {
            // Fetch the origin by Id
            var origin = await _context.Origins.FindAsync(food.Origin.OriginId);
            if (origin == null)
            {
                return BadRequest("Invalid OriginId");
            }

            // Associate the fetched origin with the food
            food.Origin = origin;

            _context.Foods.Add(food);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFoodById), new { id = food.FoodId }, food);
        }

        // GET: api/Food
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Food>>> GetAllFoods()
        {
            return await _context.Foods.ToListAsync();
        }

        // GET: api/Food/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Food>> GetFoodById(int id)
        {
            var food = await _context.Foods.FindAsync(id);
            if (food == null) return NotFound();
            return food;
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Food>>> SearchFoods(string searchTerm)
        {
            var foods = await _context.Foods
                .Where(f => f.Name.Contains(searchTerm))
                .ToListAsync();

            return foods;
        }

        // PUT: api/Food/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFood(int id, Food food)
        {
            if (id != food.FoodId) return BadRequest();
            _context.Entry(food).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodExists(id)) return NotFound();
                else throw;
            }
            return NoContent();
        }

                [HttpPut("{id}/price")]
        public async Task<ActionResult> UpdateFoodPrice(int id, [FromBody] double newPrice)
        {
            var food = await _context.Foods.FindAsync(id);
            if (food == null)
            {
                return NotFound();
            }

            if (newPrice < 0) // Optional: Add any validation you need
            {
                return BadRequest("Price cannot be negative.");
            }

            food.Price = newPrice;
            _context.Entry(food).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // HTTP 204
        }

        // DELETE: api/Food/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFood(int id)
        {
            var food = await _context.Foods.FindAsync(id);
            if (food == null) return NotFound();
            _context.Foods.Remove(food);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool FoodExists(int id) => _context.Foods.Any(e => e.FoodId == id);
    }
}
