using Incerc_Site1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Incerc_Site1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OriginController : ControllerBase
    {
        private Incerc_Site1.Contexts.MyAppContext _Origins;

        public OriginController(Incerc_Site1.Contexts.MyAppContext origins)
        {
            this._Origins = origins;
        }

        [HttpGet]
        public List<Origin> GetCategoriiList()
        {
            return _Origins.Origins.ToList();
        }
    }
}