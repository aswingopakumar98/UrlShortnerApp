using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UrlShortner.Data;
using UrlShortner.Data.Models;

namespace UrlShortner.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class StatisticsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public StatisticsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<UrlMapping>> Get()
        {
              
              var stats= await  _context.UrlMappings.ToListAsync();
              return stats;
            
        }
       


    }

    
}
