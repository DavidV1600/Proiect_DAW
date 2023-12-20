using Incerc_Site1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Incerc_Site1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriiController : ControllerBase
    {
        private Incerc_Site1.Contexts.MyAppContext _Categorii;

        public CategoriiController(Incerc_Site1.Contexts.MyAppContext categorii)
        {
            this._Categorii = categorii;
        }

        [HttpGet]
        public List<Categorie> GetCategoriiList()
        {
            return _Categorii.Categories.ToList();
        }
    }
}
