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
    public class FoodTagController : ControllerBase
    {
        private readonly MyAppContext _context;

        public FoodTagController(MyAppContext context)
        {
            _context = context;
        }

        // GET: api/FoodTag
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Food_Tag>>> GetFoodTags()
        {
            return await _context.FoodTags.ToListAsync();
        }

        // GET: api/FoodTag/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Food_Tag>> GetFoodTagById(int id)
        {
            var foodTag = await _context.FoodTags.FindAsync(id);

            if (foodTag == null)
            {
                return NotFound();
            }

            return foodTag;
        }

                [HttpGet("foods/{tagId}")]
        public async Task<ActionResult<IEnumerable<Food>>> GetFoodsByTagId(int tagId)
        {
            var foods = await _context.FoodTags
                .Where(ft => ft.TagId == tagId)
                .Select(ft => ft.Food)
                .ToListAsync();

            if (!foods.Any())
            {
                return NotFound();
            }

            return foods;
        }

        // GET: api/FoodTag/tags/5
        [HttpGet("tags/{foodId}")]
        public async Task<ActionResult<IEnumerable<Tag>>> GetTagsByFoodId(int foodId)
        {
            var tags = await _context.FoodTags
                .Where(ft => ft.FoodId == foodId)
                .Select(ft => ft.Tag)
                .ToListAsync();

            if (!tags.Any())
            {
                return NotFound();
            }

            return tags;
        }

        // POST: api/FoodTag
        [HttpPost]
        public async Task<ActionResult<Food_Tag>> CreateFoodTag(Food_Tag foodTag)
        {
            _context.FoodTags.Add(foodTag);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFoodTagById), new { id = foodTag.FoodId }, foodTag);
        }

        // PUT: api/FoodTag/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFoodTag(int id, Food_Tag foodTag)
        {
            if (id != foodTag.FoodId)
            {
                return BadRequest();
            }

            _context.Entry(foodTag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodTagExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/FoodTag/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodTag(int id)
        {
            var foodTag = await _context.FoodTags.FindAsync(id);
            if (foodTag == null)
            {
                return NotFound();
            }

            _context.FoodTags.Remove(foodTag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FoodTagExists(int id)
        {
            return _context.FoodTags.Any(e => e.FoodId == id);
        }
    }
}
