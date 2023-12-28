using Incerc_Site1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Incerc_Site1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private Incerc_Site1.Contexts.MyAppContext _Tags;

        public TagController(Incerc_Site1.Contexts.MyAppContext tags)
        {
            this._Tags = tags;
        }

        [HttpGet]
        public List<Tag> GetCategoriiList()
        {
            return _Tags.Tags.ToList();
        }
    }
}
