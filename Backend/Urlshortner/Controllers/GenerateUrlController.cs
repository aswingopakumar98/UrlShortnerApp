using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public GenerateUrlController(ApplicationDbContext context, ShortenService shortenservice)
        {
            _context = context;
            _shortenservice = shortenservice;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("This is a GET response from SampleController");
        }
        [HttpPost]
        public async Task<IResult> ShortenUrl([FromBody] string longUrl)
        {
            var shortUrl = await _shortenservice.GenerateCode();
            // return longUrl;
            var urlMappingObject = new UrlMapping
            {
                LongUrl = longUrl,
                shortUrl = shortUrl,
                Clicks = 0

            };
            // urlMappingModel.shortUrl=shortUrl;
            _context.UrlMappings.Add(urlMappingObject);
            await _context.SaveChangesAsync();
            return Results.Ok();
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
