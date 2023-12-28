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
    public class OriginController : ControllerBase
    {
        private readonly MyAppContext _context;

        public OriginController(MyAppContext context)
        {
            _context = context;
        }

        // GET: api/Origin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Origin>>> GetOrigins()
        {
            return await _context.Origins.ToListAsync();
        }

        // GET: api/Origin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Origin>> GetOriginById(int id)
        {
            var origin = await _context.Origins.FindAsync(id);

            if (origin == null)
            {
                return NotFound();
            }

            return origin;
        }

        // POST: api/Origin
        [HttpPost]
        public async Task<ActionResult<Origin>> CreateOrigin(Origin origin)
        {
            _context.Origins.Add(origin);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOriginById), new { id = origin.OriginId }, origin);
        }

        // PUT: api/Origin/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrigin(int id, Origin origin)
        {
            if (id != origin.OriginId)
            {
                return BadRequest();
            }

            _context.Entry(origin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OriginExists(id))
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

        // DELETE: api/Origin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrigin(int id)
        {
            var origin = await _context.Origins.FindAsync(id);
            if (origin == null)
            {
                return NotFound();
            }

            _context.Origins.Remove(origin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OriginExists(int id)
        {
            return _context.Origins.Any(e => e.OriginId == id);
        }
    }
}
