using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using Incerc_Site1.Models;
using System.Linq;
namespace Incerc_Site1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private Incerc_Site1.Contexts.MyAppContext _FoodsContext;

        public FoodController(Incerc_Site1.Contexts.MyAppContext FoodsContext)
        {
            this._FoodsContext = FoodsContext;
        }

        [HttpGet]
        public List<Food> Index()
        {
            return _FoodsContext.Foods.ToList();
        }


    }
}
