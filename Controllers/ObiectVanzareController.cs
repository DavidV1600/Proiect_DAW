using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using Incerc_Site1.Models;
using System.Linq;
namespace Incerc_Site1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ObiectVanzareController : ControllerBase
    {
        private Incerc_Site1.Contexts.MyAppContext _obiecteContext;

        public ObiectVanzareController(Incerc_Site1.Contexts.MyAppContext obiecteContext)
        {
            this._obiecteContext = obiecteContext;
        }

        [HttpGet]
        public List<ObiectVanzare> Index()
        {
            return _obiecteContext.ObiecteVanzare.ToList();
        }


    }
}
