using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using UrlShortner.Data;
using UrlShortner.Data.Models;

namespace UrlShortner.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class GenerateUrlController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ShortenService _shortenservice;

        private readonly AppConfig _appconfig;
        public GenerateUrlController(ApplicationDbContext context, ShortenService shortenservice,IOptions<AppConfig> appconfig)
        {
            _context = context;
            _shortenservice = shortenservice;
            _appconfig=appconfig.Value;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("This is a GET response from SampleController");
        }
        [HttpPost]
        public async Task<UrlMappingDTO> ShortenUrl([FromBody] string longUrl)
        {
            var shortUrl = await _shortenservice.GenerateCode();
            var urlMappingObject = new UrlMapping
            {
                LongUrl = longUrl,
                shortUrl = shortUrl,
                Clicks = 0

            };
            _context.UrlMappings.Add(urlMappingObject);
            await _context.SaveChangesAsync();
            var UrlMappingDTO = new UrlMappingDTO(_appconfig.redirectAppDomain+urlMappingObject.shortUrl);
            return UrlMappingDTO;
        }


    }

    //  [HttpPost] 
    //         [Authorize(Roles = "RegisteredUser")]
    //         public async Task<ActionResult<City>> PostCity(City city)
    //         {
    //             _context.Cities.Add(city);
    //             await _context.SaveChangesAsync();

    //             return CreatedAtAction("GetCity", new { id = city.Id }, city);
    //         }
}
